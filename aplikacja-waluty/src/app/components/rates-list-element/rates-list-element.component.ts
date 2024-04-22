import { Component, Input } from '@angular/core';
import { Rate } from '../../interfaces/Rate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rates-list-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rates-list-element.component.html',
  styleUrl: './rates-list-element.component.css',
})
export class RatesListElementComponent {
  @Input() rate: Rate = { currency: '', code: '', mid: 0, imgUrl: '' };
  @Input() index: number = 0;
  shouldStylesBeChanged: boolean = this.index % 2 == 1 ? true : false;
  imageSize: number = 50;
}
