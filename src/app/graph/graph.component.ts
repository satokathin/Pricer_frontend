import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {FormComponent} from '../form/form.component';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  data: Object;

  constructor(private formComponent: FormComponent) {
    this.data = formComponent.result;
  }

  ngOnInit() {
    this.data = this.formComponent.result;
    /*this.data.forEach(element => {
      
    });()*/
  }

}
