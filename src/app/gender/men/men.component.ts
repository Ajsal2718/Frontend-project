import { Component, OnInit } from '@angular/core';
import { filter,map } from 'rxjs';
import { ProductModel } from 'src/app/model/product';
import { AllproductService } from 'src/app/service/allproduct.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit{
  men:ProductModel[]= [];
  constructor(private serve:AllproductService){ }
  ngOnInit(): void {
      this.men = this.serve.allProducts.filter(x => {
        return x.gender ==='men'})
  }
}
