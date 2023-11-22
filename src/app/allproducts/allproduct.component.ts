import { Component, OnInit, inject } from '@angular/core';
import { AllproductService } from 'src/app/service/allproduct.service';
import { ProductModel } from 'src/app/model/product';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css'],
})
export class AllproductComponent implements OnInit{
  datas : ProductModel[] = [];

  constructor(private serve:AllproductService){

}
ngOnInit(): void {
  this.datas = this.serve.allProducts
  console.log(this.serve.allProducts);
}  
}