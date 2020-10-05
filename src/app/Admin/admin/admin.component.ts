import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './../../Servicios/services.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  showadm:boolean = true;

  admins = null;

  adm = {
  id_admin: 0,
  nombre_admin: null,
  usuario_admin: null,
  dui_admin: null,
  contacto_admin: null,
  contra_admin: null
  } 

  constructor(private router:Router, private zervice:ServicesService, private snack:MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 4000,
    });
  }

  agregaradmin() {
    let nombre:HTMLInputElement = document.querySelector('#nombres');
    let usuario:HTMLInputElement = document.querySelector('#usuario');
    let dui:HTMLInputElement = document.querySelector('#dui');
    let contacto:HTMLInputElement = document.querySelector('#contacto');
    let contra:HTMLInputElement = document.querySelector('#contra');
    if(nombre.value === '' || usuario.value === '' || dui.value === '' || contacto.value === '' || contra.value === '') { this.openSnackBar('NO PUEDES DEJAR CAMPOS EN BLANCO', 'OK'); }
    else{
      this.zervice.agregaradmin(this.adm).subscribe(datos => {
        if (datos['resultado'] == 'OK') {
          this.openSnackBar(datos['mensaje'],'OK');
          this.adm = {
            id_admin: 0,
            nombre_admin: null,
            usuario_admin: null,
            dui_admin: null,
            contacto_admin: null,
            contra_admin: null
            };
            this.showadm = false;
            this.router.navigate(['app']);
          }
      });
    }
  }
   

}
