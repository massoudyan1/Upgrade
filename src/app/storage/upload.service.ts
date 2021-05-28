import { Injectable, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';
import { User, NgAuthService } from '../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UploadService {

  userState: any;

  constructor(private afStorage: AngularFireStorage,
    private afAuth: AngularFireAuth,
    @Inject(NgAuthService) private user: User
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userState = user; // Sets userState to what state the user is in.
        localStorage.setItem('user', JSON.stringify(this.userState)); // Stores user info on browser.
        JSON.parse(localStorage.getItem('user')); // Retrieve user data into normal array.
      } else {
        localStorage.setItem('user', null as any); // Stores user info on browser.
        JSON.parse(localStorage.getItem('user'));  // Retrieve user data into normal array.
      }
    });
  }
  file: File; // Uses File functionality to get item info.
  url = ''; // Used below for URL storage.
  iUserData = JSON.parse(localStorage.getItem('user')); // Parses JSON Array to normal Array.
  iUser = this.iUserData.uid; // Gets unique id from localStorage item.
  basePath = `/uploads/images/${this.iUser}`; // Reference for basePath.

  // Function that will upload image to Firebase Storage
  async uploadFile(event: any) {
    this.file = event.files[0]; // Takes the image from the upload component
    const filePath = `${this.basePath}/profilepic`; // Constant for file placement
    const metaData = { 'contentType': this.file.type }; // Metadata for the image file
    await this.afStorage.upload(filePath, this.file, metaData); // Uploads image to Firebase
    if (this.file) { // Checks if fil value has a file(which means true)
      console.log('Uploading: ', this.file.name); // Shows file uploading in Console.
      this.getUrl(); // Runs getURL function to display image.
    } else {
      console.log('Select a image please.');
    }
  }

  // Function to get downloadURL for item
  async getUrl() {
    const filePath = `${this.basePath}/profilepic`; // Constant for file placement
    const snap = this.afStorage.storage.ref(filePath); // Gets location of item
    await snap.getDownloadURL().then(url => {
      this.url = url;  // Store downloadURL from Firebase
      console.log('Upload done'); // Tells upload is done
    });
  }
}
