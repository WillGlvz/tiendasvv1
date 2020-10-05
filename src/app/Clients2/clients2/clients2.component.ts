import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/Servicios/services.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-clients2',
  templateUrl: './clients2.component.html',
  styleUrls: ['./clients2.component.css']
})
export class Clients2Component implements OnInit {
  
  showCli2:boolean = true;

  clients2 = null;

  client2 = {
    id_cliente: 0,
    nombre_cli: null,
    dui_cli: null,
    code_prod: null,
    nombre_prod: null,
    precio_prod: null,
    visita_cli: null
  }

  constructor(private router:Router, private zervice:ServicesService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.ObtenerCli();
  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 4000,
    });
  }

  ObtenerCli() {
    this.zervice.ObtenerCli().subscribe(result => this.clients2 = result);
  }

  hayRegistros() {
    return true;
  }

  IrAdmin(){
    this.showCli2 = false;
    this.router.navigate(['admin2']);
  }

  IrProductos(){
    this.showCli2 = false;
    this.router.navigate(['products']);
  }

  IrInicio(){
    this.showCli2 = false;
    this.router.navigate(['principal']);
  }

  EliminarCli(id_cliente) {
    if (confirm('¿Esta seguro de elimiar el Registro?')) {
    this.zervice.EliminarCli(id_cliente).subscribe(datos => {
    if (datos['resultado'] == 'OK') {
      this.openSnackBar(datos['mensaje'],'OK');
    this.ObtenerCli();
    }
    });
    }
    }

}
