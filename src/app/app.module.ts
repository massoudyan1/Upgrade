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
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NgAuthService } from './auth/auth.service';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { ForgotPasswordComponent } from './before-login/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './before-login/email-verification/email-verification.component';
import { DashboardComponent } from './after-login/dashboard/dashboard.component';
import { SignupComponent } from './before-login/welcome/components/signup/signup.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { UserProfileComponent } from './after-login/user-profile/user-profile.component';
import { MessageModule } from 'primeng/message';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent,
    NavComponent,
    SigninComponent,
    ForgotPasswordComponent,
    EmailVerificationComponent,
    DashboardComponent,
    SignupComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    PasswordModule,
    ToastModule,
    LazyLoadImageModule,
    MessageModule,
    HttpClientModule,
    ConfirmDialogModule,
    ButtonModule,
    RippleModule
  ],
  providers: [NgAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
