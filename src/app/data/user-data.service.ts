import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private afs: AngularFirestore
  ) { }

  jData = JSON.parse(localStorage.getItem('user'));
  userDataName: string;
  userDataMail: string;

  getNameData() {
    if (this.jData.displayName == '') {
      this.userDataName = 'Navn ukendt. Sæt dit navn.';
      console.log('test');
    } else {
      this.userDataName = this.jData.displayName;
      console.log('test');
    }
  }

  getEmailData() {
    this.userDataMail = this.jData.email;
  }

  setDOB() {

  }

  setHeight() {

  }

  setWeight() {

  }
}
