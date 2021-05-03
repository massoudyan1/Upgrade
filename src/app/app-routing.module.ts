import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './before-login/welcome/components/about/about.component';
import { ContactComponent } from './before-login/welcome/components/contact/contact.component';
import { SigninComponent } from './before-login/welcome/components/signin/signin.component';
import { SignupComponent } from './before-login/welcome/components/signup/signup.component';
import { WelcomeComponent } from './before-login/welcome/welcome.component';


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
    component: WelcomeComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
