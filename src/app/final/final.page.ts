import { Component, OnInit } from '@angular/core';
import { Person } from 'src/interfaces/person';
import { Experiencia } from 'src/interfaces/experiencia';
import { Estudios } from 'src/interfaces/estudios';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyeccion } from 'src/interfaces/proyeccion';

@Component({
  selector: 'app-final',
  templateUrl: './final.page.html',
  styleUrls: ['./final.page.scss'],
})
export class FinalPage implements OnInit {

  data:Person;
  experiencia:Experiencia;
  estudios:Estudios;
  noexperiencia:Proyeccion;

  constructor(public route: ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state) {
        this.data= this.router.getCurrentNavigation().extras.state.person;
        this.experiencia = this.router.getCurrentNavigation().extras.state.experiencia;
        this.estudios =  this.router.getCurrentNavigation().extras.state.estudios;
        this.noexperiencia = this.router.getCurrentNavigation().extras.state.noexperiencia;
      }
    });
   // console.log(this.noexperiencia.aspiracion);
    
  }
  regresar(){
    this.router.navigate(['home']);
  }
}
