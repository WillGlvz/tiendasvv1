import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  url = 'https://ppractico.000webhostapp.com/';

  constructor(private http:HttpClient) { }

  /* ADMINISTRADORES */
  verificaradmin(){
      return this.http.get(`${this.url}primeradmin.php`);
  }

  ObtenerAdmin(){
    return this.http.get(`${this.url}Readadmin.php`);
  }

  SeleccionarAdmin(id_admin:number) {
    return this.http.get(`${this.url}SelectAdmin.php?id_admin=${id_admin}`);
    }

    ModificarAdmin(admin) {
      return this.http.post(`${this.url}UpdateAdmin.php`, JSON.stringify(admin));
    }

    EliminarAdmin(id_admin:number) {
      return this.http.get(`${this.url}DeleteAdmin.php?id_admin=${id_admin}`);
    }
      
  login(user:string, pass:string) {
    return this.http.get(`${this.url}login.php?user=${user}&pass=${pass}`);
  }

  agregaradmin(admin){
    return this.http.post(`${this.url}create.php`, JSON.stringify(admin));
  }

  /* PRODUCTOS */
  ObtenerProd(){
    return this.http.get(`${this.url}ReadProd.php`);
  }

  agregarprod(prod){
    return this.http.post(`${this.url}CreateProd.php`, JSON.stringify(prod));
  }

  SeleccionarProd(id_producto:number) {
    return this.http.get(`${this.url}SelectProd.php?id_producto=${id_producto}`);
  }

  ModificarProd(producto) {
    return this.http.post(`${this.url}UpdateProd.php`, JSON.stringify(producto));
  }

  EliminarProd(id_producto:number) {
    return this.http.get(`${this.url}DeleteProd.php?id_producto=${id_producto}`);
  }

  /* CLIENTES */
  agregarcliente(cli){
    return this.http.post(`${this.url}CreateCli.php`, JSON.stringify(cli));
  }

  ObtenerCli(){
    return this.http.get(`${this.url}ReadCli.php`);
  }

  EliminarCli(id_cliente:number) {
    return this.http.get(`${this.url}DeleteCli.php?id_cliente=${id_cliente}`);
  }
}
