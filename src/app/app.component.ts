import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from './Servicios/services.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaSv';
  
  constructor(private router:Router, private zervice:ServicesService, private snack:MatSnackBar){}
  show:boolean = true;

  ngOnInit() {
    this.verificaradmin();
    }
   

  articulos = null;

  logs = {
    user: null,
    pass: null
  }

  openSnackBar(message: string, action: string) {
    this.snack.open(message, action, {
      duration: 4000,
    });
  }

  verificaradmin() {
    this.zervice.verificaradmin().subscribe(datos => {
      if (datos['resultado'] == 'OK') {
      alert(datos['mensaje']);
      this.ir();
      }
      });
     
    }

  ir(){
    this.show = false;
    this.router.navigate(['admin']);
  }

  login(user, pass) {
    let usuario:HTMLInputElement = document.querySelector('#first_name');
    let password:HTMLInputElement = document.querySelector('#last_name');
    if(usuario.value === '' || password.value === '') { this.openSnackBar('NO PUEDES DEJAR CAMPOS EN BLANCO', 'OK'); }
    else{
      this.zervice.login(user, pass).subscribe(datos => {
        if (datos['resultado'] == 'OK') {
          this.openSnackBar(datos['mensaje'], 'OK');
          this.show = false;
          this.router.navigate(['principal']);
        }else{
          this.openSnackBar(datos['mensaje'], 'OK');
        }
      });
    }
  }
   
}
