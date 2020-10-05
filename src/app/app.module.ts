import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { ProductsComponent } from './Productos/products/products.component';
import { ClientsComponent } from './Clientes/clients/clients.component';
import { PrincipalComponent } from './Principal/principal/principal.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Admin2Component } from './Admin2/admin2/admin2.component';
import { Clients2Component } from './Clients2/clients2/clients2.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductsComponent,
    ClientsComponent,
    PrincipalComponent,
    Admin2Component,
    Clients2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
