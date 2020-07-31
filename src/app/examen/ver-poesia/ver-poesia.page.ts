import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Poesia } from '../registro/modelo/poesia';

@Component({
  selector: 'app-ver-poesia',
  templateUrl: './ver-poesia.page.html',
  styleUrls: ['./ver-poesia.page.scss'],
})
export class VerPoesiaPage implements OnInit {

  poesia: Observable<any>

  poesia1:Poesia = new Poesia();
  constructor(private route: ActivatedRoute, private auth: AuthService,
    public router: Router) { }

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get("id")

    this.poesia = this.auth.getPoesia(id);

    this.poesia.subscribe(data =>{
      
    })
  }

  compartir(){
    this.router.navigate(['login'])
  }

}
