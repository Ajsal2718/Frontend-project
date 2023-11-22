import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product';
import { FilterServiceService } from '../service/filter-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
cart : ProductModel[] = [];
allProduct : ProductModel[] = []
pvalue : number = 1;
cartPrice = 0;
totalQuantity = 0;
constructor(private filtserv:FilterServiceService){ }
ngOnInit(): void {
  this.cart = this.filtserv.tocartProduct;
  this.updatePrice();
}
stepUp(){
  this.pvalue++
  
}
stepDown(){
  this.pvalue--
}
updatePrice(){
  this.cartPrice = 0;
  this.totalQuantity = 0;
  for(let product of this.cart) {
    this.totalQuantity += product.quantity;
    this.cartPrice += product.quantity * product.newPrice;
  }
}
deleteProduct(cartpro){
  const index = this.cart.indexOf(cartpro);
  console.log(index);
  this.cart.splice(index,1);
  this.updatePrice();
}
}