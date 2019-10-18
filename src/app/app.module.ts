import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import {MatInputModule, MatButtonModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { GraphComponent } from './graph/graph.component';

import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme/*, TimeSeries*/);
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FusionChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
