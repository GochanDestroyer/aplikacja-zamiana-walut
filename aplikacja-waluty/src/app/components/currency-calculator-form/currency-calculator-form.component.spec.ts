import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCalculatorFormComponent } from './currency-calculator-form.component';

describe('CurrencyCalculatorFormComponent', () => {
  let component: CurrencyCalculatorFormComponent;
  let fixture: ComponentFixture<CurrencyCalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyCalculatorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrencyCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
