import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  @ViewChild('name') inputName;
  @ViewChild('email') inputEmail;
  @ViewChild('message') inputMsg;
  contactForm: FormGroup;
  submitted = false;
  isLoading = false;
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  message: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(256)
  ]);
  honeypot: FormControl = new FormControl('');

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void { }
  onSubmit() {
    if (this.contactForm.status == 'VALID' && this.honeypot.value == '') {
      const { name, email, message } = this.contactForm.value;
      this.contactForm.disable();
      var formData: any = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      this.isLoading = true;
      this.submitted = false;
      this.http
        .post(
          'https://script.google.com/macros/s/AKfycbxvqs5CmelHvCgJ0PYKYkV01JxWN1W2MKvMbiErKAArz4M5cgdK/exec',
          formData
        )
        .subscribe(
          (response: any) => {
            if (response['result'] == 'success') {
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Din mail er blevet sendt.',
                life: 2000
              });
            } else {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Afsendelsen af din mail fik en fejl.',
                life: 2000
              });
            }
            this.contactForm.enable();
            this.submitted = true;
            this.contactForm.reset();
            this.isLoading = false;
            console.log(response);
          },
          error => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail:
                'En fejl er opstået, prøv og genindlæs siden igen eller prøv senere.',
              life: 2000
            });
            this.contactForm.enable();
            this.submitted = true;
            this.isLoading = false;
            console.log(error);
          }
        );
    }
  }
  handleClear() {
    this.inputName.nativeElement.value = '';
    this.inputEmail.nativeElement.value = '';
    this.inputMsg.nativeElement.value = '';
  }
}
