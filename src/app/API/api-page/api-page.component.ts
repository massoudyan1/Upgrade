import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.scss']
})
export class ApiPageComponent implements OnInit {

  constructor() { }


  messages: Array<any> = [];

  ngOnInit(): void {
   fetch("http://localhost:3000/messages")
   .then((response: any) => response.json())
   .then((data : any) => this.messages = data)
   .catch((err: any) => console.log('Error: ' + err.message))
  }
}
