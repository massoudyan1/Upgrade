import { Injectable, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';
import { User, NgAuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UploadService {

  userState: any;

  constructor(private afStorage: AngularFireStorage,
    @Inject(NgAuthService) private user: User
  ) { }
  file: File; // Sets file to use File interface.
  url = ''; // Used for URL storage
  iUserData = JSON.parse(localStorage.getItem('user')); // Parses and makes iUserData usable elsewhere
  iUser = this.iUserData.uid; // Gets unique id from iUserData
  basePath = `/uploads/images/${this.iUser}`; // Reference for basePath

  /**
   * 
   * Upload image to Firebase Storage Bucket.
   * 
   * Uses ```event``` array and puts it into the array.
   * 
   * Then makes ```this.file``` equal to the arrays 0 index.
   * ```this.file``` is a variable that uses the interface File so I can use it's name and other properties from the selected file.
   * 
   * Then it uploads the image into the declared ```basePath``` with a file name specified as profilepic.
   * 
   */
  async uploadFile(event: any, form: any) {
    this.file = event.files[0]; // Takes the image from the upload component
    const filePath = `${this.basePath}/profilepic`; // Constant for file placement
    const metaData = { 'contentType': this.file.type }; // Metadata for the image file
    await this.afStorage.upload(filePath, this.file, metaData); // Uploads image to Firebase
    if (this.file) { // Checks if file value has a file(which means true)
      console.log('Uploading: ', this.file.name); // Shows file uploading in Console
      form.clear(); // Clears upload button, so image doesn't get uploaded again.
      this.getUrl(); // Runs getURL function to display image
    } else {
      console.log('Select a image please.');
    }
  }

  /**
   * Get download URL from uploaded file and displays it.
   * 
   * Stores value into: ```this.url;```
   */
  async getUrl() {
    const filePath = `${this.basePath}/profilepic`; // Constant for file placement
    const snap = this.afStorage.storage.ref(filePath); // Gets location of item
    await snap.getDownloadURL().then(url => {
      this.url = url;  // Store downloadURL from Firebase
      console.log('Upload done'); // Tells upload is done
    });
  }
}
