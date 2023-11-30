import { Component,ViewChild } from '@angular/core';
import { ProductModel } from 'src/app/model/product';
import { AdminServcService } from 'src/app/service/admin-servc.service';
import { AllproductService } from 'src/app/service/allproduct.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  pushProducts:ProductModel[] = [];
  prdctId:number;
  @ViewChild('prdctForm') formValues:NgForm;

  constructor(private servc:AdminServcService,private prdctserv:AllproductService,private route:Router){
    this.prdctId = this.prdctserv.allProducts.length+1
   }
  

  submit(){
    // console.log(this.formValues);
    
    this.servc.addProducts(this.formValues.value)
    this.route.navigate(['admin-products'])
    console.log(this.formValues);
    
  }

}
