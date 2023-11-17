import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product';
import { AllproductService } from '../service/allproduct.service';
import { FilterServiceService } from '../service/filter-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
cart:ProductModel[]=[];
constructor(private filtserv:FilterServiceService){ }
ngOnInit(): void {
  this.cart = this.filtserv.cartProduct
}
}
