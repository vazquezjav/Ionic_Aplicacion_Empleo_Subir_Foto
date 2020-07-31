import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-lista-poesias',
  templateUrl: './lista-poesias.page.html',
  styleUrls: ['./lista-poesias.page.scss'],
})
export class ListaPoesiasPage implements OnInit {

  poesias:Observable<any[]>
  constructor(private route: ActivatedRoute, public router: Router,
    private auth: AuthService) { }

  ngOnInit() {
    this.poesias=this.auth.getPoesias()
    console.log(this.poesias)
  }

  trackByFn(index, obj){
    return obj.uid;
  }

  showPoesia(id: any){
    console.log(id)
    this.router.navigate([`poesia/${id}`])
  }

  publicar(){
    this.router.navigate(['home']);
  }

  
}
