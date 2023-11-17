import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserLoginService } from '../service/user-login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  forms: any;
  submit: boolean;
  constructor(private fb:FormBuilder, private srvc: UserLoginService,private route: Router){ }
  ngOnInit(){
    this.forms = this.fb.group({
      firstname: ['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
     });

   }  
   //name = new FormControl('');
   get f() { 
    return this.forms.controls; 
  }

    onclick() {
    this.submit = true;
    // console.log(this.forms);
    this.srvc.user.push(this.forms.value);
    this.srvc.signUp();
    this.route.navigate(['login']);
    // this.forms.reset();

    

   // stop here if form is invalid
   if (this.forms.invalid) {
       return;
   }

   // display form values on success
   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forms.value, null, 4));
   }

   onReset() {
   this.submit = false;
}
}
