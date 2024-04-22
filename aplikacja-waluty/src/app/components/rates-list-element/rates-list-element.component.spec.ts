import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesListElementComponent } from './rates-list-element.component';

describe('RatesListElementComponent', () => {
  let component: RatesListElementComponent;
  let fixture: ComponentFixture<RatesListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatesListElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatesListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
