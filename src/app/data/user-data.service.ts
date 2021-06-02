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
  userId = this.jData.uid;

  getNameData() {
    if (this.jData.displayName == '') {
      this.userDataName = 'Navn ukendt. Sæt dit navn.';
    } else {
      this.userDataName = this.jData.displayName;
    }
  }

  getEmailData() {
    this.userDataMail = this.jData.email;
  }

  setDOB(dob: string) {
    this.afs.collection('users').doc(`${this.userId}`).set({ dob: dob }, { merge: true });
  }

  setHeight(height: string) {
    this.afs.collection('users').doc(`${this.userId}`).set({ height: height }, { merge: true });
  }

  setWeight(weight: string) {
    this.afs.collection('users').doc(`${this.userId}`).set({ weight: weight }, { merge: true });
  }

  setGender(gender: string) {
    this.afs.collection('users').doc(`${this.userId}`).set({ gender: gender }, { merge: true });
  }
}
