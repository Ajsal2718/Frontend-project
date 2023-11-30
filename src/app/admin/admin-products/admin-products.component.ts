import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/model/product';
import { AdminServcService } from 'src/app/service/admin-servc.service';
import { AllproductService } from 'src/app/service/allproduct.service';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

allProducts:ProductModel[] = [];
  constructor(private servc:AllproductService,private adminServc:AdminServcService){ 
    this.allProducts = this.servc.allProducts
  }

  removeProducts(id:number){
    this.adminServc.removeProducts(id)
  }

}
