import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPrice(dateToprice, nominal, periodicity, coupon, maturity) {
    return this.http.get('http://localhost:8080/api/pricer/price/' +
    dateToprice + '?nominal=' + nominal + '&periodicity=' + periodicity +
    '&coupon=' + coupon + '&maturity=' + maturity);
  }

  getPrices(initialDate, issueDate, nominal, periodicity, coupon, maturity) {
    return this.http.get('http://localhost:8080/api/pricer/prices/?nominal='
    + nominal + '&periodicity=' + periodicity + '&coupon=' + coupon +
    '&maturity=' + maturity + '&initialDate=' + initialDate + '&issueDate=' + issueDate);
  }

  getAllRate() {
    return this.http.get('http://localhost:8080/api/pricer/ratecurves/').pipe()/*.pipe((data => data))*/;
  }
}
