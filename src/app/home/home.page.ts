import { Component } from '@angular/core';
import { Person } from 'src/interfaces/person';
import { Router, NavigationExtras } from '@angular/router';
import { FingerprintAIOOriginal, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router ) {}
  icono:string="finger-print-outline";

  saludar(){
    this.router.navigate(['datos']);
  }
  saludar2(data){
    console.log("saludo ",data)
  }

  lista(){
    this.router.navigate(['lista-empleos']);
  }

  imagenCargada(e){
    console.log("imagen Cargada",e);
    console.log(JSON.stringify(e));
  }
  registro(){
    this.router.navigate(['registro']);
  }

  login(){
    this.router.navigate(['login'])
  }

  registrate(){
    this.router.navigate(['registro']);
  }

}
