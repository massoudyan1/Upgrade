import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  styles: [`
  .p-password input {
    width: 20rem
  }`]


})
export class SigninComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService) {  }

  ngOnInit(): void {
  }

}
