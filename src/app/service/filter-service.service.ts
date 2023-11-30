import { Injectable, OnInit } from '@angular/core';
import { ProductModel } from '../model/product';
import { AllproductService } from './allproduct.service';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService implements OnInit{
  prdcts: ProductModel[] = []; 
  tocartProduct:ProductModel[] = [];
  constructor(private serve:AllproductService) { }

  ngOnInit(): void {
    
  }

  viewProducts(id:number){
    let productView = this.serve.allProducts.filter((x) => {
      return x.id === id;
    })
    console.log(productView);
    this.prdcts = productView;
  }

  cart(id:number){
    const cartProduct =  this.serve.allProducts.filter(x => x.id === id)
    const productInCart = this.tocartProduct.find(x => x.id === id)
    if(!productInCart){
    this.tocartProduct.push(cartProduct[0])
    alert("product added")
    }else{
      alert("Product exists");
    }
  }
}
