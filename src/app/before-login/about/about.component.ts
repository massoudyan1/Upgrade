import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ConfirmationService]
})
export class AboutComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) { }

  omos: Array<any> = [];

  ngOnInit(): void {
    fetch("http://localhost:3000/omos")
   .then((response: any) => response.json())
   .then((data : any) => this.omos = data)
   .catch((err: any) => console.log('Error: ' + err.message))
  }
}
