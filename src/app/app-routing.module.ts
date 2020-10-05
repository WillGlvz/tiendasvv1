import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './Admin/admin/admin.component';
import { ClientsComponent } from './Clientes/clients/clients.component';
import { PrincipalComponent } from './Principal/principal/principal.component';
import { ProductsComponent } from './Productos/products/products.component';
import { Admin2Component } from './Admin2/admin2/admin2.component';
import { Clients2Component } from './Clients2/clients2/clients2.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'admin2', component: Admin2Component},
  {path: 'client', component: ClientsComponent},
  {path: 'client2', component: Clients2Component},
  {path: 'principal', component: PrincipalComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'app', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
