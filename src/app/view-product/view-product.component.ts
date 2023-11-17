import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { FilterServiceService } from '../service/filter-service.service';
import { UserLoginService } from '../service/user-login.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
  productdeteils : ProductModel[] = [];
  relatedProduct:ProductModel[] = [];
  id:number
  constructor(private active:ActivatedRoute,private serv:FilterServiceService,private servUser:UserLoginService){ }

  ngOnInit(): void {
    let routeparam = this.active.snapshot.paramMap.get('id');
    this.id=+routeparam
    console.log(routeparam);
    this.serv.viewProducts(parseInt(routeparam));
    this.productdeteils = this.serv.prdcts;
    // this.relatedProduct = this.serv.relaPrdct;
    // this.servUser.showSearch = false;
  }
  toCart(){
    this.serv.cart(this.id)
  }
}
