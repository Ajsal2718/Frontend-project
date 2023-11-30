import { Component } from '@angular/core';
import { SignupModel } from 'src/app/model/signup-model';
import { UserLoginService } from 'src/app/service/user-login.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent {
users:SignupModel [] = [];
constructor(private servc:UserLoginService){ 
  this.users = this.servc.user;
  
}

}
