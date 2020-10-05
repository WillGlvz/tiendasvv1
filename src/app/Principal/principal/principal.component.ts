import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  showPri:boolean = true;

  constructor(private router:Router) { }

  IrAdmin(){
    this.showPri = false;
    this.router.navigate(['admin2']);
  }

  IrProductos(){
    this.showPri = false;
    this.router.navigate(['products']);
  }

  IrCliente(){
    this.showPri = false;
    this.router.navigate(['client']);
  }

  IrCliente2(){
    this.showPri = false;
    this.router.navigate(['client2']);
  }

}
