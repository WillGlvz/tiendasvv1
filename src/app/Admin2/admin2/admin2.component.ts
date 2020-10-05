import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './../../Servicios/services.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.css']
})
export class Admin2Component implements OnInit {

  showAdmin:boolean = true;

  admins = null;

  aDm = {
    id_admin: 0,
    nombre_admin: null,
    usuario_admin: null,
    dui_admin: null,
    contacto_admin: null,
    contra_admin: null
  }

  constructor(private router:Router, private zervice:ServicesService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.ObtenerAdmin();
    this.showAdmin = true;
  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 4000,
    });
  }

  ObtenerAdmin() {
    this.zervice.ObtenerAdmin().subscribe(result => this.admins = result);
  }

  SeleccionarAdmin(id_admin) {
    this.zervice.SeleccionarAdmin(id_admin).subscribe(result => this.aDm = result[0]);
  }

  EliminarAdmin(id_admin) {
    if (confirm('¿Esta seguro de elimiar el Registro?')) {
    this.zervice.EliminarAdmin(id_admin).subscribe(datos => {
    if (datos['resultado'] == 'OK') {
      this.openSnackBar(datos['mensaje'],'OK');
    this.ObtenerAdmin();
    }else{
      this.openSnackBar(datos['mensaje'],'OK');
    }
    });
    }
    }
   

  ModificarAdmin() {
    this.zervice.ModificarAdmin(this.aDm).subscribe(datos => {
    if (datos['resultado'] == 'OK') {
      this.openSnackBar(datos['mensaje'],'OK');
      this.ObtenerAdmin();
      this.aDm = {
        id_admin: 0,
        nombre_admin: null,
        usuario_admin: null,
        dui_admin: null,
        contacto_admin: null,
        contra_admin: null
        }; 
      }else{
        this.openSnackBar(datos['mensaje'],'OK');
      }
    });
  }
       

  agregaradmin() {
    this.zervice.agregaradmin(this.aDm).subscribe(datos => {
    if (datos['resultado'] == 'OK') {
      this.openSnackBar(datos['mensaje'],'OK');
      this.ObtenerAdmin();
      this.aDm = {
        id_admin: 0,
        nombre_admin: null,
        usuario_admin: null,
        dui_admin: null,
        contacto_admin: null,
        contra_admin: null
        }; 
      }
    });
  }

  hayRegistros() {
    return true;
  }

  IrProductos(){
    this.showAdmin = false;
    this.router.navigate(['products']);
  }


  IrClientes(){
    this.showAdmin = false;
    this.router.navigate(['client2']);
  }

  IrInicio(){
    this.showAdmin = false;
    this.router.navigate(['principal']);
  }
     

}
