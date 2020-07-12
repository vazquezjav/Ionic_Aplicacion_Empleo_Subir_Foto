import { Component, OnInit } from '@angular/core';
import { Person } from 'src/interfaces/person';
import { Experiencia } from 'src/interfaces/experiencia';
import { Proyeccion } from 'src/interfaces/proyeccion';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
})
export class ExperienciaPage implements OnInit {
  id:string="";

  data: Person;
  experiencia: Experiencia={
    cargo:'',
    funcion:'',
    tiempo:''
  };
  noexperiencia:Proyeccion={
    aspiracion:'',
    dominio:''
  };
  constructor(public route: ActivatedRoute, public router: Router) { }
 //route: recibe parametors 
 //router: permite la navegacion 


  ngOnInit() {
    //this.id =this.route.snapshot.paramMap.get("id");
    //console.log(this.id)

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
        experiencia:this.experiencia,
        noexperiencia:this.noexperiencia
      }
    };

    this.router.navigate(['estudios'],extras);
  }

}
