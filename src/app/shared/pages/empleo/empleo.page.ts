import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../../services/empleos.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleo } from '../../model/empleo';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.page.html',
  styleUrls: ['./empleo.page.scss'],
})
export class EmpleoPage implements OnInit {

  /*empleo1:Empleo={
    uid:'',
    titulo:'',
    descripcion:'',
    salario:0,
    numero:0,
    imagen:0
  };*/
  empleo1: Empleo = new Empleo()
  emp:Empleo=new Empleo()
  imagen:string
  constructor(private empleosService:EmpleosService,
    private route: ActivatedRoute,
    public router: Router) { }

  
  empleo: Observable<any>
  
  //empleo1:Empleo=new Empleo()

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get("id")
    this.empleo=this.empleosService.getEmpleo(id)


    //para editar un empleo 
    this.empleo.subscribe(data =>{
      this.empleo1.titulo=data.titulo
      this.empleo1.descripcion=data.descripcion
      this.empleo1.salario=data.salario
      this.empleo1.uid=data.uid
     
    })
  }

  edit(){
    console.log(this.empleo1)
    this.emp=this.empleo1
  }
  
  pasarEmpleo(){
    this.emp=this.empleo1
    console.log(this.emp)
    let extras: NavigationExtras={
      state:{
        empleo:this.emp
      }
    };
    this.router.navigate(['editar-empleo'],extras);
    console.log("pasa")
  }

}
