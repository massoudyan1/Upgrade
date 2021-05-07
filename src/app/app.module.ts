import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './before-login/welcome/welcome.component';
import { AboutComponent } from './before-login/welcome/components/about/about.component';
import { ContactComponent } from './before-login/welcome/components/contact/contact.component';
import { NavComponent } from './before-login/welcome/components/nav/nav.component';
import { SigninComponent } from './before-login/welcome/components/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NgAuthService } from './auth/auth.service';
import {PasswordModule} from 'primeng/password';
import {ToastModule} from 'primeng/toast';
import { ForgotPasswordComponent } from './before-login/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './before-login/email-verification/email-verification.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    SigninComponent,
    ForgotPasswordComponent,
    EmailVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    TooltipModule,
    InputTextareaModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    PasswordModule,
    ToastModule
  ],
  providers: [NgAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
