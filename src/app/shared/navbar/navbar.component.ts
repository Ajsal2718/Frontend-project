import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/service/user-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  onremove : boolean = false;
  logout : boolean  = false;
  out = 'Logout';
  sidenav: any;
  constructor(private serve:UserLoginService){ }
  ngOnInit(): void {
    this.onremove = this.serve.issignupcart;
    this.logout = this.serve.issignupcart;
  }

}
