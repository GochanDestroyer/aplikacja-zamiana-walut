import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CurrencyApiService } from '../../services/currency-api.service';
import { RatesListElementComponent } from '../rates-list-element/rates-list-element.component';
import { AppComponent } from '../../app.component';
import { Rate } from '../../interfaces/Rate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rates-list',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AppComponent],
  imports: [RatesListElementComponent, CommonModule],
  templateUrl: './rates-list.component.html',
  styleUrl: './rates-list.component.css',
})
export class RatesListComponent {
  rates: Rate[] = [];

  constructor(private currencyApi: CurrencyApiService) {}

  ngOnInit() {
    this.currencyApi.getRates1().subscribe((res: any) => {
      this.rates = res[0].rates;
      this.currencyApi.getRates2().subscribe((res: any) => {
        this.rates.push(...res[0].rates);
        this.rates.sort((a, b) => {
          return a.currency.localeCompare(b.currency);
        });
        this.rates = this.rates.filter((rate) => {
          return (
            rate.code != 'VES' &&
            rate.code != 'XCD' &&
            rate.code != 'ZWL' &&
            rate.code != 'XOF' &&
            rate.code != 'XAF' &&
            rate.code != 'XPF' &&
            rate.code != 'SSP' &&
            rate.code != 'ALL'
          );
        });
        this.rates.forEach((rate) => {
          rate.code = rate.code.toLowerCase();
          rate.imgUrl =
            'https://raw.githubusercontent.com/Lissy93/currency-flags/master/assets/flags_svg/' +
            rate.code +
            '.svg';
        });
      });
    });
  }
}
