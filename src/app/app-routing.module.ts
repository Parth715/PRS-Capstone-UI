import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RequestsComponent } from './requests/requests.component';
import { UsersComponent } from './users/users.component';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  {path: "", redirectTo: "", pathMatch: "full"},
  {path: "user", component: UsersComponent},
  {path: "product", component: ProductsComponent},
  {path: "request", component: RequestsComponent},
  {path: "vendor", component: VendorsComponent},
  {path: "**", component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
