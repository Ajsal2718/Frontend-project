import { Component, Input, } from '@angular/core';
import { ProductModel } from 'src/app/model/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent{
@Input() product : ProductModel
}