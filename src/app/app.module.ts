import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent} from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { MenuItemsComponent } from './menu/menu-items/menu-items.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    MenuItemsComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductListComponent,
    RequestCreateComponent,
    RequestDetailComponent,
    RequestEditComponent,
    RequestListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorListComponent,
    ReviewComponent,
    ReviewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
