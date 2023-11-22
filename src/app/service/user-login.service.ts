import { Injectable } from '@angular/core';
import { SignupModel } from '../model/signup-model';
import { Router } from '@angular/router';
import { ProductModel } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  signinValues: SignupModel[]=[];
  signupValues: SignupModel [] = [];
  user: SignupModel[] = []
  showSearch : boolean = true;
  issignupcart : boolean = false;
  remove : boolean  = false;

  constructor(private route: Router) {
    const localdata = localStorage.getItem('signUpUsers');
    if (localdata != null) {
      this.user = JSON.parse(localdata);
    }
  }

  signUp() {
    this.remove = true
    localStorage.setItem('signUpUsers', JSON.stringify(this.user))
    this.route.navigate(['userlogin'])
        alert('User SignedUp Successfully');
        if(this.signupValues === this.signupValues){
        }
  }

  login(value:{username:string,password:string}) {
    this.remove = false
    console.log(this.signupValues);
    
    const findperson = this.user.filter((x) => {
      return x.firstname === value.username && x.password === value.password
    })
    if(findperson.length == 0 || value.username === null || value.password === null){
      alert('Your Not Signup')
      this.issignupcart = false;
    }
    else{
      this.route.navigate(['allproduct']);
      this.issignupcart = true;
    }
    console.log(this.signupValues);
    
  }

}
