import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { NgAuthService } from '../../auth/auth.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    PasswordModule,
    ToastModule,
    LazyLoadImageModule,
    MessageModule,
    ButtonModule,
    RippleModule,
    FileUploadModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AutoCompleteModule
  ],
  providers: [NgAuthService]
})
export class DashboardModule { }
