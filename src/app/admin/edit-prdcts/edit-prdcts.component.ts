import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { ProductModel } from 'src/app/model/product';
import { AdminServcService } from 'src/app/service/admin-servc.service';
import { AllproductService } from 'src/app/service/allproduct.service';

@Component({
  selector: 'app-edit-prdcts',
  templateUrl: './edit-prdcts.component.html',
  styleUrls: ['./edit-prdcts.component.css']
})
export class EditPrdctsComponent implements OnInit{
  @ViewChild('editprdctForm') editForms:NgForm;

  prdcts:ProductModel;

  constructor(private servc:AdminServcService,private route:ActivatedRoute,private prdctServ:AllproductService,private router:Router){

  }

    ngOnInit(): void {
      let prdctId = this.route.snapshot.paramMap.get('id');
      let prdcts = this.prdctServ.allProducts.find((x) => {
        return x.id === Number(prdctId);
      })
      
      this.prdcts = prdcts;
      
      this.servc.editForm = this.editForms;
      
      setTimeout(() => {
        this.editForms.setValue({
          id:prdcts.id,
          title:prdcts.title,
          img:prdcts.img,
          gender:prdcts.gender,
          category:prdcts.category,
          newPrice:prdcts.newPrice
        })
      },200);
    }

  editPrdct(){
    this.servc.editPrdct(this.prdcts,this.editForms.value);
    this.router.navigate(['admin-products'])
    const form = this.editForms.value;
  }
}


