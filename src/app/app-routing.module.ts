import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './before-login/welcome/components/about/about.component';
import { ContactComponent } from './before-login/welcome/components/contact/contact.component';
import { SigninComponent } from './before-login/welcome/components/signin/signin.component';
import { SignupComponent } from './before-login/welcome/components/signup/signup.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
