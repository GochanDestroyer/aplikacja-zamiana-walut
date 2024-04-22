import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  url1: string = 'https://api.nbp.pl/api/exchangerates/tables/a/';
  url2: string = 'https://api.nbp.pl/api/exchangerates/tables/b/';

  constructor(private http: HttpClient) {}

  getRates1() {
    return this.http.get(this.url1);
  }

  getRates2() {
    return this.http.get(this.url2);
  }
}
