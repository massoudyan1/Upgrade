import { Injectable, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';
import { User, NgAuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private afStorage: AngularFireStorage, @Inject(NgAuthService) private user: User) { }
  file: File;
  url = '';
  iUser = this.user.uid;
  basePath = `/uploads/images/${this.iUser}`;

  //method to upload file at firebase storage
  async uploadFile(event: any) {
    this.file = event.files[0];
    const filePath = `${this.basePath}/${this.file.name}`;    //path at which image will be stored in the firebase storage
    await this.afStorage.upload(filePath, this.file);
    if (this.file) {
      this.getUrl();
    } else {
      console.log("Select a image please.")
    }
  }

  //method to retrieve download url
  async getUrl() {
    const filePath = `${this.basePath}/${this.file.name}`; // error is coming from here.
    const snap = this.afStorage.storage.ref(filePath);
    await snap.getDownloadURL().then(url => {
      this.url = url;  //store the URL
      console.log(this.url);
    });
  }
}
