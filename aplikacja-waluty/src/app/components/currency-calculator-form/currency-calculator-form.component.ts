import { Component, EventEmitter, Output } from '@angular/core';
import { CurrencyApiService } from '../../services/currency-api.service';
import { Rate } from '../../interfaces/Rate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-calculator-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-calculator-form.component.html',
  styleUrl: './currency-calculator-form.component.css',
})
export class CurrencyCalculatorFormComponent {
  @Output() sendResult = new EventEmitter<string>();
  rates: Rate[] = [];
  select1Elements: string[] = ['polski złoty'];
  select2Elements: string[] = [];
  selectElementsTmp: string[] = [];
  choosenRateVaule: number = 0;
  howMuchItIs: number = 0;
  valueToDisplay: string = '';
  indexInSelect: number = 0;

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
          this.select2Elements.push(rate.currency);
        });
      });
    });
  }

  onCalcClicked(
    iHave: HTMLInputElement,
    selectCurrency1: HTMLSelectElement,
    selectCurrency2: HTMLSelectElement,
    $event: Event
  ) {
    $event.preventDefault();
    if (this.select1Elements[0] == 'polski złoty') {
      this.rates.forEach((rate) => {
        if (rate.currency == selectCurrency2.value) {
          this.choosenRateVaule = rate.mid;
        }
      });
      this.howMuchItIs = Number(iHave.value) / this.choosenRateVaule;
    } else {
      this.rates.forEach((rate) => {
        if (rate.currency == selectCurrency1.value) {
          this.choosenRateVaule = rate.mid;
        }
      });
      this.howMuchItIs = Number(iHave.value) * this.choosenRateVaule;
    }
    this.valueToDisplay = this.howMuchItIs.toFixed(2);
    this.sendResult.emit(this.valueToDisplay);
  }

  changeCurriencies(
    changeCurrienciesButton: HTMLButtonElement,
    selectCurrency1: HTMLSelectElement,
    selectCurrency2: HTMLSelectElement,
    $event: Event
  ) {
    $event.preventDefault();
    setTimeout(() => {
      changeCurrienciesButton.blur();
    }, 1000);
    this.selectElementsTmp = this.select1Elements;
    this.select1Elements = this.select2Elements;
    this.select2Elements = this.selectElementsTmp;
    if (this.select1Elements[0] == 'polski złoty') {
      this.indexInSelect = selectCurrency1.selectedIndex;
    } else {
      this.indexInSelect = selectCurrency2.selectedIndex;
    }
  }
}
