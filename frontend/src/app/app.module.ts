import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { productService } from'./service/product.service';
import { userService } from './service/user.service'
import { HttpClientModule }  from'@angular/common/http';

//import components
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductComponent } from './components/product/product.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { UpproductComponent } from './components/upproduct/upproduct.component';
import { LoginComponent } from './components/login/login.component';

//generar rutas
const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'userLogin', component:LoginComponent},
  {path: 'list-product', component:ProductComponent},
  {path: 'add-product', component:AddproductComponent},
  {path: 'up-product/:id', component:UpproductComponent},
  {path: 'delete-product/:id', component:ProductComponent},
  {path: 'filter-product/:name', component:ProductComponent}
];

/* Decoradores */
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    ProductComponent,
    AddproductComponent,
    UpproductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    productService,
    userService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
