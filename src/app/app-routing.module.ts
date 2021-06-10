import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './before-login/about/about.component';
import { ContactComponent } from './before-login/contact/contact.component';
import { SignupComponent } from './before-login/signup/signup.component';
import { WelcomeComponent } from './before-login/welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './before-login/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './before-login/email-verification/email-verification.component';
import { UserProfileComponent } from './after-login/user-profile/user-profile.component';
import { FaerdighederComponent } from './after-login/faerdigheder/faerdigheder.component';

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
    loadChildren: () => import('./before-login/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./after-login/dashboard/dashboard.module').then(m => m.DashboardModule),
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
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'faerdigheder',
    component: FaerdighederComponent,
    canActivate: [AuthGuard]
  },

];


@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
