import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product';
import { AllproductService } from 'src/app/service/allproduct.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit{
  women:ProductModel[]= [];
  constructor(private serve:AllproductService){ }
  ngOnInit(): void {
      this.women = this.serve.allProducts.filter(x => {
        return x.gender ==='wommen'})
  }
}
