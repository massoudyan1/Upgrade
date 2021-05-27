import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import firebase from 'firebase/app';
import { User } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  file: File;
  url = '';
  constructor(private afStorage: AngularFireStorage, public user: User) { }
  iUser = this.user.uid;
  basePath = `/uploads/images/${this.iUser}`;

  //method to upload file at firebase storage
  async uploadFile(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      const filePath = `${this.basePath}/${this.file.name}`;    //path at which image will be stored in the firebase storage
      const snap = await this.afStorage.upload(filePath, this.file);    //upload task
      this.getUrl(snap);
    } else { alert('Please select an image'); }
  }

  //method to retrieve download url
  async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
    const url = await snap.ref.getDownloadURL();
    this.url = url;  //store the URL
    console.log(this.url);
  }
}
