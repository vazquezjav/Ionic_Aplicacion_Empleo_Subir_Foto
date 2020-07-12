import { Component, OnInit } from '@angular/core';
import { Empleo } from '../../model/empleo';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleosService } from '../../services/empleos.service';

@Component({
  selector: 'app-editar-empleo',
  templateUrl: './editar-empleo.page.html',
  styleUrls: ['./editar-empleo.page.scss'],
})
export class EditarEmpleoPage implements OnInit {

  empleo: Empleo;
  constructor(public route: ActivatedRoute, public router: Router,
    private empleosService: EmpleosService) { }

  ngOnInit() {
    console.log("editar")

    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state) {
        this.empleo = this.router.getCurrentNavigation().extras.state.empleo;
      }
  });
    
  }
  getEmpleo() {
    console.log(this.empleo)
    //return this.empleo;
  }
  showCrearEmpleo(){
    this.router.navigate([`lista-empleos`])
  }
  actualizarEmpleo(){
    this.empleosService.updateEmpleo(this.empleo)
    this.showCrearEmpleo()
  }

}
