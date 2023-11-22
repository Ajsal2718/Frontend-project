import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../service/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  forms : FormGroup;
  submit : boolean =  false;
  constructor(private fb:FormBuilder,private serve : UserLoginService){ }
  ngOnInit(): void {
    this.forms = this.fb.group({
      username: ['',Validators.required],
      password :['',Validators.required]
    });
  }

  get f(){
    return this.forms.controls;
  }

  onclick(){
    this.submit = true;
    this.serve.login(this.forms.value)
  }
  // onRest(){
  //   this.submit = false;
  //   this.forms.reset()
  // }
}

