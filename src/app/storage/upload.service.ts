import { Injectable, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import firebase from 'firebase/app';
import { User, NgAuthService } from '../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

interface ProfileImgUrls {
  profilepic?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UploadService {

  userState: any;
  ProfileImgUrl: AngularFireObject<ProfileImgUrls>;

  constructor(private afStorage: AngularFireStorage,
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    @Inject(NgAuthService) private user: User
  ) {
    this.ProfileImgUrl = this.afDatabase.object(`/profileinfo/${this.iUser}/profilepic`);
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null as any);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }
  file: File;
  url = '';
  iUserData = JSON.parse(localStorage.getItem('user'));
  iUser = this.iUserData.uid;
  basePath = `/uploads/images/${this.iUser}`;

  //method to upload file at firebase storage
  async uploadFile(event: any) {
    this.file = event.files[0];
    const filePath = `${this.basePath}/profilepic`;
    const metaData = { 'contentType': this.file.type };
    await this.afStorage.upload(filePath, this.file, metaData);
    if (this.file) {
      console.log('Uploading: ', this.file.name);
      this.getUrl();
    } else {
      console.log('Select a image please.');
    }
  }

  //method to retrieve download url
  async getUrl() {
    const filePath = `${this.basePath}/profilepic`; // error is coming from here.
    const snap = this.afStorage.storage.ref(filePath);
    await snap.getDownloadURL().then(url => {
      this.url = url;  //store the URL
      console.log(this.url);
    });
  }
}
