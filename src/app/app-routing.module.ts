import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './before-login/about/about.component';
import { ContactComponent } from './before-login/contact/contact.component';
import { SigninComponent } from './before-login/signin/signin.component';
import { SignupComponent } from './before-login/signup/signup.component';
import { WelcomeComponent } from './before-login/welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './before-login/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './before-login/email-verification/email-verification.component';
import { DashboardComponent } from './after-login/dashboard/dashboard.component';
import { UserProfileComponent } from './after-login/user-profile/user-profile.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: WelcomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'email-verification',
    component: EmailVerificationComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
