import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AllproductComponent } from './allproducts/allproduct.component';
import { MenComponent } from './gender/men/men.component';
import { WomenComponent } from './gender/women/women.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { authGuard } from './guard/auth.guard';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'allproduct',component:AllproductComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'view-product/:id',component:ViewProductComponent,canActivate:[authGuard]},
  {path:'cart-page',component:CartPageComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
