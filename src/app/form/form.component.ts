import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../Data';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class FormComponent implements OnInit {

  nominal: Number;
  coupon: Number;
  periodicity: Number;
  maturity: Number;
  initialDate: Date;
  dateToPrice: Date;
  maxDate: Date;
  minDate: Date;

  // price: Object;
  public result: Object;

  chartConfig: Object;
  dataSource: Object;

  GraphData: Data[];
  dates = [];
  price = [];
  chart = [];
  // rates: Object;

  constructor(private data: DataService) {
    this.chartConfig = {
      width: '700',
      height: '400',
      type: 'column2d',
      dataFormat: 'json',
    };

    this.dataSource = this.result;
  }

  ngOnInit() {
    this.nominal = 100.0;
    this.coupon = 1.5;
    this.periodicity = 0.5;
    this.maturity = 2;
    // this.initialDate = new Date("1993-01-04");
    this.maxDate = new Date("2011-07-29");
    this.minDate = new Date("1993-01-24");

  }

  onPrice() {
    console.log("ok !")

    /*this.data.getPrice(this.initialDate, this.nominal,
      this.periodicity, this.coupon, this.maturity).subscribe(
        data => this.price = data
      );*/

    this.data.getPrices(this.initialDate, this.dateToPrice, this.nominal,
      this.periodicity, this.coupon, this.maturity).subscribe(
        (data: Data[]) => {
          data.forEach(y => {
            this.dates.push(y.date);
            this.price.push(y.price);
          });
          this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: this.dates,
              datasets: [
                {
                  label: 'Show/Hidden',
                  data: this.price,
                  borderColor: '#3cba9f',
                  fill: true
                }
              ]
            },
            options: {
              legend: {
                display: true,
                text: 'price'
              },
              title: {
                display: true,
                text: 'My Prices Charts !'
              },
              scales: {
                xAxes: [{
                  display: true,
                  text: 'values'
                }],
                yAxes: [{
                  display: true,
                  text: 'dates'
                }],
              }
            }
          });
        }
      );

      // data => this.result = data

      /*this.data.getAllRate().subscribe(
        data => this.rates = data
      );*/
  }

}
