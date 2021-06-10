import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private afs: AngularFirestore
  ) { }

  jData = JSON.parse(localStorage.getItem('user'));
  userName: string;
  userMail: string;
  userDOB: Date;
  userHeight: number;
  userWeight: number;
  userId = this.jData.uid;
  userDate = new Date("1999-09-09");
  dateFormat = 'dd/MM/yyyy';
  dateLocale = 'en-DK';

  getNameData() {
    this.afs.collection('users').doc(`${this.userId}`).get()
      .toPromise().then((doc) => {
        if (doc.get('displayName') == null) {
          this.userName = 'Navn ukendt. Sæt dit navn.'
        } else {
          this.userName = doc.get('displayName');
        }
      });
  }

  getDOB() {
    this.afs.collection('users').doc(`${this.userId}`).get()
      .toPromise().then((doc) => {
        if (doc.get('dob') == null) {
          this.userDOB = this.userDate;
        } else {
          this.userDOB = doc.get('dob');
        }
      });
  }

  getEmailData() {
    this.afs.collection('users').doc(`${this.userId}`).get()
      .toPromise().then((doc) => {
        this.userMail = doc.get('email');
      });
  }

  getHeight() {
    this.afs.collection('users').doc(`${this.userId}`).get()
      .toPromise().then((doc) => {
        if (doc.get('height') == null) {
          this.userHeight = 181;
        } else {
          this.userHeight = doc.get('height');
        }
      });
  }

  getWeight() {
    this.afs.collection('users').doc(`${this.userId}`).get()
      .toPromise().then((doc) => {
        if (doc.get('weight') == null) {
          this.userWeight = 70;
        } else {
          this.userWeight = doc.get('weight');
        }
      });
  }

  getGender() {
    this.afs.collection('users').doc(`${this.userId}`).get()
      .toPromise().then((doc) => {
        if (doc.get('gender') == null) {
          // WIP
        }
      });
  }

  /**
   * Sets value of name field to a value that was provided from a input field
   * @param name value is set when input comes from change on website.
   */
  setName(name: string) {
    this.afs.collection('users').doc(`${this.userId}`)
      .set({ displayName: name }, { merge: true });
    localStorage.user = name;
    this.getNameData();
  }

  /**
   * Sets value of email field to a value that was provided from a input field.
   * @param email value is set when input from change on website.
   */
  setMail(email: string) {
    this.afs.collection('users').doc(`${this.userId}`)
      .set({ email: email }, { merge: true });
    this.getEmailData();
  }

  /**
   * Sets value of DOB field to a value that was provided from a input field.
   * @param dob value is set when input comes from change on website.
   */
  setDOB(dob: Date) {
    this.afs.collection('users').doc(`${this.userId}`)
      .set({ dob: dob }, { merge: true });
    this.getDOB();
  }

  setHeight(height: number) {
    this.afs.collection('users').doc(`${this.userId}`)
      .set({ height: height }, { merge: true });
    this.getHeight();
  }

  setWeight(weight: number) {
    this.afs.collection('users').doc(`${this.userId}`)
      .set({ weight: weight }, { merge: true });
    this.getWeight();
  }

  setGender(gender: string) {
    this.afs.collection('users').doc(`${this.userId}`)
      .set({ gender: gender }, { merge: true });
    this.getGender();
  }
}
