import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;
  isLoading = false;
  name: FormControl = new FormControl('', [Validators.required]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  message: FormControl = new FormControl('', [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl('');

  constructor(private fb: FormBuilder, private messageService: MessageService, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.contactForm.status == 'VALID' && this.honeypot.value == '') {
      this.contactForm.disable();
      const formData:FormData = new FormData();
      formData.append('name', this.contactForm.get('name').value);
      formData.append('email', this.contactForm.get('email').value);
      formData.append('message', this.contactForm.get('message').value);
      this.isLoading = true;
      this.submitted = false;
      this.http.post('URL FROM GOOGLE HERE', formData).subscribe(
        (response) => {
          if (response == 'success') {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Den mail er blevet sendt.'
            });
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Afsendelsen af din mail fik en fejl.'
            });
          }
          this.contactForm.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(response);
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'En fejl er opstået, prøv og genindlæs siden igen eller prøv senere.'
          });
          this.contactForm.enable();
          this.submitted = true;
          this.isLoading = false;
          console.log(error);
        }
      );
    }
  }
}
