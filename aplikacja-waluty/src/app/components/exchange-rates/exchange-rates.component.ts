import { Component } from '@angular/core';
import { RatesListComponent } from '../rates-list/rates-list.component';

@Component({
  selector: 'app-exchange-rates',
  standalone: true,
  imports: [RatesListComponent],
  templateUrl: './exchange-rates.component.html',
  styleUrl: './exchange-rates.component.css',
})
export class ExchangeRatesComponent {}
