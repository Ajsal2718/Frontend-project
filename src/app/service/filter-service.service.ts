import { Injectable, OnInit } from '@angular/core';
import { ProductModel } from '../model/product';
import { AllproductService } from './allproduct.service';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService implements OnInit{
  prdcts: ProductModel[]=[]; 
  cartProduct:ProductModel[]=[]
  constructor(private serve:AllproductService) { }

  ngOnInit(): void {
    
  }

  viewProducts(id:number,paramType?:string){
    let productView = this.serve.allProducts.filter((x) => {
      return x.id === id;
    })
    console.log(productView);
    this.prdcts = productView;
  }

  cart(id:number){
    this.cartProduct = this.serve.allProducts.filter(x=>x.id===id)
    console.log(this.cartProduct);
    
  }
}
