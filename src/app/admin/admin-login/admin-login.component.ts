import { Component,OnInit, ViewChild } from '@angular/core';
import { UserLoginService } from 'src/app/service/user-login.service';
import { FormBuilder,FormGroup,NgForm,Validator, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{
  forms : any;
  submit :boolean;

  @ViewChild('forms') formGroup:NgForm
  constructor(private fb:FormBuilder,private servc:UserLoginService){ }

  ngOnInit(): void {
    this.forms = this.fb.group({
      firstname:['',Validators.required],
      password:['',Validators.required],

    })
  }
  get f() { 
    return this.forms.controls; 
  }

  onclick(){
    this.submit = true;
    this.servc.adminLogin(this.forms.value.firstname,this.forms.value.password);
  }
}
