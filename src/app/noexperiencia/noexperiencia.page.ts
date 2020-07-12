import { Component, OnInit } from '@angular/core';
import { Person } from 'src/interfaces/person';
import { Proyeccion } from 'src/interfaces/proyeccion';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Experiencia } from 'src/interfaces/experiencia';

@Component({
  selector: 'app-noexperiencia',
  templateUrl: './noexperiencia.page.html',
  styleUrls: ['./noexperiencia.page.scss'],
})
export class NoexperienciaPage implements OnInit {

  data:Person;
  noexperiencia:Proyeccion={
    aspiracion:'',
    dominio:''
  };
  experiencia:Experiencia={
    cargo:'',
    funcion:'',
    tiempo:''
  };
  constructor(public route: ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.person;
      }
  });
  }

  enviar(){
    let extras: NavigationExtras={
      state:{
        person:this.data,
        noexperiencia:this.noexperiencia,
        experiencia:this.experiencia
      }
    };

    this.router.navigate(['estudios'],extras);
  }

}
