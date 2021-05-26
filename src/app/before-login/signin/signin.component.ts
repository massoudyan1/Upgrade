import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgAuthService } from 'src/app/auth/auth.service';
// import { threadId } from 'worker_threads';
import { projectAuth, projectFirestore, timestamp } from '../../../firebase/config.js'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],


})
export class SigninComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  @ViewChild('userName') inputName;
  @ViewChild('password') inputPassword;

  logIn() {
    projectAuth.onAuthState.subscribe( async (user) => {
      if(user) {
        // Naviger til after-login Home
        await this.ngAuthService.SignIn(this.inputName.value, this.inputPassword.value)
        .then(_ => {
          this.router.navigate(['user-profile']);
        })
        .catch(err => {
          console.log(err);
        })
      } else {
        // Naviger til before-login Home
        this.router.navigate(['welcome']);

      }
    });
  }

  
}
