import { Component, OnInit } from '@angular/core';
import { Person } from 'src/interfaces/person';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {


  person:Person={
    nombre:'',
    cedula:'',
    direccion:'',
    fechaNacimiento:"2020-01-01",
    sexo:""
  };

  nombre:string='Javier';
  direccion:string='Mendez';
  cedula:string='14012';
  fechaNacimiento:string='30/11';
  sexo:string='masculino';

  constructor(public router: Router) { }
    
  saludar(){
    console.log("Hola"+this.person.nombre)
    this.person.direccion="Santiago"

   //  this.router.navigate(['experiencia',this.person.cedula])
  }
  experiencia(){
    let extras: NavigationExtras={
      state:{
        person:this.person
      }
    };
    this.router.navigate(['experiencia'],extras);
  }

  noexperiencia(){
    let extras: NavigationExtras={
      state:{
        person:this.person
      }
    };
    this.router.navigate(['noexperiencia'],extras);
  }

  ngOnInit() {
  }

}
