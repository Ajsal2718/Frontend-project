import { Component } from '@angular/core';
import { UserLoginService } from 'src/app/service/user-login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  adminName : string = '';
  constructor(private servc:UserLoginService){
    this.adminName = this.servc.adminName
  }
}
