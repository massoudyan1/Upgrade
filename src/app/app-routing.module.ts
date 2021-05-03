import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './before-login/welcome/components/about/about.component';
import { ContactComponent } from './before-login/welcome/components/contact/contact.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
