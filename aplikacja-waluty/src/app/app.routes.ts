import { Routes } from '@angular/router';
import { CurrencyCalculatorComponent } from './components/currency-calculator/currency-calculator.component';
import { ExchangeRatesComponent } from './components/exchange-rates/exchange-rates.component';

export const routes: Routes = [
  { path: '', redirectTo: '/exchange-rates', pathMatch: 'full' },
  { path: 'exchange-rates', component: ExchangeRatesComponent },
  { path: 'currency-calculator', component: CurrencyCalculatorComponent },
];
