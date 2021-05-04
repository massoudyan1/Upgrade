import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './before-login/welcome/welcome.component';
import { AboutComponent } from './before-login/welcome/components/about/about.component';
import { ContactComponent } from './before-login/welcome/components/contact/contact.component';
import { NavComponent } from './before-login/welcome/components/nav/nav.component';
import { SigninComponent } from './before-login/welcome/components/signin/signin.component';
import { SignupComponent } from './before-login/welcome/components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { AngularFireModule } from 'angularfire2'

export const firebaseConfig = {
  apiKey: "AIzaSyA5Zoqz5Zim18mBm9L9lpwrM1qMGnPQNKE",
  authDomain: "upgrade-47108.firebaseapp.com",
  projectId: "upgrade-47108",
  storageBucket: "upgrade-47108.appspot.com",
  messagingSenderId: "1013623221779",
  appId: "1:1013623221779:web:455bb63b9bf0648de0d9e6"
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    TooltipModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
