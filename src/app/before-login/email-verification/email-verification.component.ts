import { Component, OnInit } from '@angular/core';
import { NgAuthService } from 'src/app/auth/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
  providers: [MessageService]
})
export class EmailVerificationComponent implements OnInit {

  constructor(
    public ngAuthService: NgAuthService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
  }

  ToastMsg() {
    console.log(this.ngAuthService.SendVerificationMail.toString());
  }
}
