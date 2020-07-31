import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccionar',
  templateUrl: './seleccionar.page.html',
  styleUrls: ['./seleccionar.page.scss'],
})
export class SeleccionarPage implements OnInit {

  selectcategory:any;

  opciones: any[] = [
    {
      id: 1,
      first: 'Usuario',
    },
    {
      id: 2,
      first: 'Empresa',
    },
    
  ];
  constructor() { 
  }

  ngOnInit() {
    this.selectcategory="Usuario";
  }

  codeSelected(){

    console.log(this.selectcategory);
  }

  guardar(){
    console.log(this.selectcategory)
  }

}
