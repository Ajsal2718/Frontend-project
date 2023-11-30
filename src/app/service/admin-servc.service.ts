import { Injectable } from '@angular/core';
import { AllproductService } from './allproduct.service';
import { NgForm } from '@angular/forms';
import { ProductModel } from '../model/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminServcService {
  prdctsId:Number = 0;
  editForm: NgForm;

  constructor(private servc:AllproductService,private route:Router) { }

  removeProducts(prdctId:number){
    const productFind = this.servc.allProducts.find((x) => {
      return x.id == prdctId;
    })
    let indexValue = this.servc.allProducts.indexOf(productFind);
    this.servc.allProducts.splice(indexValue,1);
  }

  addProducts(formValues:ProductModel){
    this.servc.allProducts.push(formValues);
    console.log(this.servc.allProducts);
  }

  editPrdct(product:ProductModel,formValues:ProductModel){
    let index = this.servc.allProducts.findIndex((x) => {
      return x.id === product.id
    });
    this.servc.allProducts[index] = formValues;
    console.log(formValues);
  }
  
}
