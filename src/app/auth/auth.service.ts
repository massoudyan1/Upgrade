import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';

export interface User {
  uid: string;
  email: string;
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
          this.router.navigate(['dashboard']);
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
      }).catch((error) => {
        console.log(error.message);
      });
  }

  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => this.userState.sendEmailVerification())
      .then(() => {
        this.router.navigate(['email-verification']);
      }).catch((error) => {
        console.log(error.message);
      });
  }

  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.router.navigate(['forgot-password']);
      }).catch((error) => {
        console.log(error);
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  FacebookAuth() {
    return this.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  MicrosoftAuth() {
    return this.AuthLogin(new firebase.auth.OAuthProvider('microsoft.com'));
  }

  GitHubAuth() {
    return this.AuthLogin(new firebase.auth.GithubAuthProvider());
  }

  TwitterAuth() {
    return this.AuthLogin(new firebase.auth.TwitterAuthProvider());
  }

  AuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
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
      email: user.email
    };
    return userRef.set(userState, {
      merge: true
    });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    });
  }
}
