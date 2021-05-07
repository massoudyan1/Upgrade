import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import 'firebase/auth';

export interface User {
  uid: string;
  email: string;
  name: string;
  gender: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class NgAuthService {
  userState: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', null as any);
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    });
  }

  SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          console.log('Logged in!');
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        console.log(error.message);
      });
  }

  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
        console.log('Account created!');
      }).catch((error) => {
        console.log(error.message);
      });
  }

  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => this.userState.sendEmailVerification())
      .then(() => {
        this.router.navigate(['email-verification']);
      });
  }

  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        console.log(error);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider());
  }

  FacebookAuth() {
    return this.AuthLogin(new firebase.default.auth.FacebookAuthProvider());
  }

  MicrosoftAuth() {
    return this.AuthLogin(new firebase.default.auth.OAuthProvider('microsoft.com'));
  }

  GitHubAuth() {
    return this.AuthLogin(new firebase.default.auth.GithubAuthProvider());
  }

  AppleAuth() {
    return this.AuthLogin(new firebase.default.auth.OAuthProvider('apple.com'));
  }

  TwitterAuth() {
    return this.AuthLogin(new firebase.default.auth.TwitterAuthProvider());
  }

  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          console.log('Auth login success!');
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        console.log(error);
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userState: User = {
      uid: user.uid,
      email: user.email,
      name: user.Name,
      gender: user.gender,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userState, {
      merge: true
    });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
}
