import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AllproductService } from './service/allproduct.service';
import { AllproductComponent } from './allproducts/allproduct.component';
import { MenComponent } from './gender/men/men.component';
import { WomenComponent } from './gender/women/women.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { ViewProductComponent } from './view-product/view-product.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AllproductComponent,
    MenComponent,
    WomenComponent,
    LoginComponent,
    SignupComponent,
    ViewProductComponent,
    CartPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AllproductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
