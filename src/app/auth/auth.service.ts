import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/auth';

export interface User {
  uid: string;
  email: string;
  displayName: string;
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
    public ngZone: NgZone,
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.removeItem('user');
      }
    });
  }

  async SignIn(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
      this.SetUserData(result.user);
    }
    catch (error) {
      console.log(error.message);
    }
  }

  async SignUp(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.SendVerificationMail();
      this.SetUserData(result.user);
    }
    catch (error) {
      console.log(error.message);
    }
  }

  async SendVerificationMail(): Promise<any> {
    try {
      this.userState.sendEmailVerification();
      this.router.navigate(['email-verification']);
    }
    catch (error) {
      console.log(error.message);
    }
  }

  async ForgotPassword(passwordResetEmail: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      this.router.navigate(['forgot-password']);
    }
    catch (error) {
      console.log(error.message);
    }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
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

  async AuthLogin(provider: any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider);
      this.ngZone.run(() => {
        this.router.navigate(['dashboard']);
      });
      this.SetUserData(result.user);
    }
    catch (error) {
      console.log(error.message);
    }
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userState: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified
    };
    return userRef.set(userState, {
      merge: true
    });
  }

  async SignOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['home']);
  }
}
