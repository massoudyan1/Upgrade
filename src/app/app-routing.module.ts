import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './before-login/welcome/components/about/about.component';
import { ContactComponent } from './before-login/welcome/components/contact/contact.component';
import { SigninComponent } from './before-login/welcome/components/signin/signin.component';
import { SignupComponent } from './before-login/welcome/components/signup/signup.component';
import { WelcomeComponent } from './before-login/welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './before-login/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './before-login/email-verification/email-verification.component';


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
    path: 'home',
    component: WelcomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'email-verification',
    component: EmailVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
