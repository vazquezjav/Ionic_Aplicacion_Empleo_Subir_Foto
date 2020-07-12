import { Component, OnInit } from '@angular/core';
import { Person } from 'src/interfaces/person';
import { Experiencia } from 'src/interfaces/experiencia';
import { Estudios } from 'src/interfaces/estudios';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Proyeccion } from 'src/interfaces/proyeccion';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.page.html',
  styleUrls: ['./estudios.page.scss'],
})
export class EstudiosPage implements OnInit {

  data:Person;
  experiencia:Experiencia;
  noexperiencia:Proyeccion;
  estudios:Estudios={
    area:'',
    titulo:'',
    rendimiento:''
  };
  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.person;
        this.experiencia = this.router.getCurrentNavigation().extras.state.experiencia;
        this.noexperiencia = this.router.getCurrentNavigation().extras.state.noexperiencia;
      }
      
    });
    //console.log(this.noexperiencia.aspiracion);
  }

  enviar(){
    let extras: NavigationExtras={
      state:{
        person:this.data,
        experiencia:this.experiencia,
        estudios:this.estudios,
        noexperiencia:this.noexperiencia
      }
    };

    this.router.navigate(['final'],extras);
  }

}
