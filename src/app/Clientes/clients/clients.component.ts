import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './../../Servicios/services.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  showCli:boolean = true;

  clients = null;

  client = {
    id_cliente: 0,
    nombre_cli: null,
    dui_cli: null,
    code_prod: null,
    nombre_prod: null,
    precio_prod: null,
    visita_cli: null
  }

  constructor(private router:Router, private zervice:ServicesService, private snack:MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 4000,
    });
  }

  agregarcli() {
    this.zervice.agregarcliente(this.client).subscribe(datos => {
    if (datos['resultado'] == 'OK') {
      this.openSnackBar(datos['mensaje'],'OK');
      this.client = {
        id_cliente: 0,
        nombre_cli: null,
        dui_cli: null,
        code_prod: null,
        nombre_prod: null,
        precio_prod: null,
        visita_cli: null
      }; 
      }
    });
  }

  IrProductos(){
    this.showCli = false;
    this.router.navigate(['products']);
  }

  IrAdmin(){
    this.showCli = false;
    this.router.navigate(['admin2']);
  }

  IrCliente(){
    this.showCli = false;
    this.router.navigate(['client2']);
  }

  IrInicio(){
    this.showCli = false;
    this.router.navigate(['principal']);
  }

}
