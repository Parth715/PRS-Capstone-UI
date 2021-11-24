import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { ReviewComponent } from './review/review.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';


const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "userlist", component: UserListComponent},
  {path: "userdetail/:id", component: UserDetailComponent},
  {path: "useredit/:id", component: UserEditComponent},
  {path: "usercreate", component: UserCreateComponent},
  {path: "productlist", component: ProductListComponent},
  {path: "productdetail", component: ProductDetailComponent},
  {path: "productedit", component: ProductEditComponent},
  {path: "productcreate", component: ProductCreateComponent},
  {path: "requestlist", component: RequestListComponent},
  {path: "requestdetail", component: RequestDetailComponent},
  {path: "requestedit", component: RequestEditComponent},
  {path: "requestcreate", component: RequestCreateComponent},
  {path: "vendorlist", component: VendorListComponent},
  {path: "vendordetail", component: VendorDetailComponent},
  {path: "vendoredit", component: VendorEditComponent},
  {path: "vendorcreate", component: VendorCreateComponent},
  {path: "review", component: ReviewComponent},
  {path: "**", component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
