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
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MatModule } from './mat/mat.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AdminLoginComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,  

  ],
  providers: [AllproductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
