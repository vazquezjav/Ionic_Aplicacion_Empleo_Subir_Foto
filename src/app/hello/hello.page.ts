import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit {

  id:string="";
  constructor(public route: ActivatedRoute) { }

  saludar(){
    
  }
  ngOnInit() {
    this.id = this.route.snapshot.params.get('id');
    const texto: string="Datos";
  }

}
