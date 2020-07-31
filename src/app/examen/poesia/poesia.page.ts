import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Poesia } from '../registro/modelo/poesia';

@Component({
  selector: 'app-poesia',
  templateUrl: './poesia.page.html',
  styleUrls: ['./poesia.page.scss'],
})
export class PoesiaPage implements OnInit {

  poesia: Observable<any>

  poesia1:Poesia = new Poesia();
  constructor(private route: ActivatedRoute, private auth: AuthService,
    public router: Router) { }

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get("id")
   
    this.poesia = this.auth.getPoesia(id);

  }

  compartir(){
    this.router.navigate(['login'])
  }
  
}
