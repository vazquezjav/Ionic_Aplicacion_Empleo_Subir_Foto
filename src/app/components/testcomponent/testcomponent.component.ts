import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.scss'],
})
export class TestcomponentComponent implements OnInit {

  //parametro de entrada que se hace referencia desde la pagina donde se 
  //llama al componente 
  @Input() icon:string;

  @Output() finish= new EventEmitter<any>();
  contador:number=0;
  constructor() { }

  ngOnInit() {}

  calcular(){
    this.contador =this.contador+1;

    this.finish.emit({message:'OK',contador:this.contador});
  }


}
