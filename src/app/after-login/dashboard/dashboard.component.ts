import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d'); 

    new Chart(this.ctx, {
      type: 'radar',
      data: {
        labels: [ // label the corners in the set row.
          'Svømning',
          'Mad lavning',
          'Læse træning',
          'Lære Programing',
          'Tærning'
        ],
        datasets: [{
          label: 'Your Data',
          data: [55, 49, 60, 54, 52], // user data in the lable row
          fill: true,
          backgroundColor: 'rgba(00, 200, 00, 0.5)',
          borderColor: '#00FF00',
          pointBackgroundColor: 'rgb(00, 250, 000)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(00, 255, 00)'
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 2
          }
        }
      }
    });
  }
}
