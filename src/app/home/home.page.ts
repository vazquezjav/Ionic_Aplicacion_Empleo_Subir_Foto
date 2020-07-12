import { Component } from '@angular/core';
import { Person } from 'src/interfaces/person';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  saludar(){
    this.router.navigate(['datos']);
  }

  lista(){
    this.router.navigate(['lista-empleos']);
  }
}
