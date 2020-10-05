import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './../../Servicios/services.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  showProd:boolean = true;

  products = null;

  prdc = {
    id_producto: 0,
    nombre_prod: null,
    precio_prod: null
  }

  constructor(private router:Router, private zervice:ServicesService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.ObtenerProd();
  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 4000,
    });
  }

  ObtenerProd() {
    this.zervice.ObtenerProd().subscribe(result => this.products = result);
  }

  agregarprod() {
    this.zervice.agregarprod(this.prdc).subscribe(datos => {
    if (datos['resultado'] == 'OK') {
      this.openSnackBar(datos['mensaje'],'OK');
      this.ObtenerProd();
      this.prdc = {
        id_producto: 0,
        nombre_prod: null,
        precio_prod: null
      }; 
      }
    });
  }

  SeleccionarProd(id_producto) {
    this.zervice.SeleccionarProd(id_producto).subscribe(result => this.prdc = result[0]);
  }

  ModificarProd() {
    this.zervice.ModificarProd(this.prdc).subscribe(datos => {
    if (datos['resultado'] == 'OK') {
      this.openSnackBar(datos['mensaje'],'OK');
      this.ObtenerProd();
      this.prdc = {
        id_producto: 0,
        nombre_prod: null,
        precio_prod: null
      }; 
      }else{
        this.openSnackBar(datos['mensaje'],'OK');
      }
    });
  }

  EliminarProd(id_producto) {
    if (confirm('¿Esta seguro de elimiar el Registro?')) {
    this.zervice.EliminarProd(id_producto).subscribe(datos => {
    if (datos['resultado'] == 'OK') {
      this.openSnackBar(datos['mensaje'],'OK');
    this.ObtenerProd();
    }
    });
    }
    }

  hayRegistros() {
    return true;
  }

  IrAdmin(){
    this.showProd = false;
    this.router.navigate(['admin2']);
  }

  IrCliente(){
    this.showProd = false;
    this.router.navigate(['client2']);
  }

  IrInicio(){
    this.showProd = false;
    this.router.navigate(['principal']);
  }

}
