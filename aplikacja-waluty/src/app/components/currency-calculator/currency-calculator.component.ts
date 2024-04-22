import { Component } from '@angular/core';
import { CurrencyCalculatorFormComponent } from '../currency-calculator-form/currency-calculator-form.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-currency-calculator',
  standalone: true,
  imports: [CurrencyCalculatorFormComponent, CommonModule],
  templateUrl: './currency-calculator.component.html',
  styleUrl: './currency-calculator.component.css',
})
export class CurrencyCalculatorComponent {
  receivedResult: string = '';
  numberToCheck: number = 0;

  onResultSend(valueToDisply: string) {
    this.receivedResult = 'Po zamianie będzie to: ' + valueToDisply;
    this.numberToCheck = Number(valueToDisply);
  }
}
