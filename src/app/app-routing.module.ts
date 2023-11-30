import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { EditPrdctsComponent } from './admin/edit-prdcts/edit-prdcts.component';


const routes: Routes = [
  {path:'allproduct',component:AllproductComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'view-product/:id',component:ViewProductComponent,canActivate:[authGuard]},
  {path:'cart-page',component:CartPageComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'admin-users',component:AdminUserComponent},
  {path:'admin-products',component:AdminProductsComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'edit-product/:id',component:EditPrdctsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
