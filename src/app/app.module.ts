// Env //
import { environment } from '../environments/environment';

// Components //
import { AppComponent } from './app.component';

// After-login
import { DashboardComponent } from './after-login/dashboard/dashboard.component';
import { UserProfileComponent } from './after-login/user-profile/user-profile.component';
import { FaerdighederComponent } from './after-login/faerdigheder/faerdigheder.component';
import { EnkeltComponent } from './after-login/faerdigheder/enkelt/enkelt.component';
import { KategoriComponent } from './after-login/faerdigheder/kategori/kategori.component';
import { OpgraderComponent } from './after-login/faerdigheder/opgrader/opgrader.component';
import { SlutsideComponent } from './after-login/faerdigheder/slutside/slutside.component';
import { BeskederComponent } from './after-login/beskeder/beskeder.component';

// Before-login
import { WelcomeComponent } from './before-login/welcome/welcome.component';
import { AboutComponent } from './before-login/about/about.component';
import { ContactComponent } from './before-login/contact/contact.component';
import { NavComponent } from './before-login/nav/nav.component';
import { SigninComponent } from './before-login/signin/signin.component';
import { SignupComponent } from './before-login/signup/signup.component';
import { ForgotPasswordComponent } from './before-login/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './before-login/email-verification/email-verification.component';

//

// Services //
import { UploadService } from './storage/upload.service';
import { NgAuthService } from './auth/auth.service';

// Modules //
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageModule } from 'primeng/message';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AngularFirePerformanceModule, PerformanceMonitoringService } from '@angular/fire/performance';



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
    UserProfileComponent,
    FaerdighederComponent,
    EnkeltComponent,
    KategoriComponent,
    OpgraderComponent,
    SlutsideComponent,
    BeskederComponent
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
    ButtonModule,
    RippleModule,
    FileUploadModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AutoCompleteModule,
    AngularFirePerformanceModule
  ],
  providers: [
    NgAuthService, 
    UploadService, 
    PerformanceMonitoringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
