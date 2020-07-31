import { Component, OnInit } from '@angular/core';
import { Usuario } from './modelo/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario= new Usuario();
  constructor(private route: ActivatedRoute, public router: Router,
    private auth: AuthService) { }

  ngOnInit() {
  }

  async registro(){
    await this.auth.nuevoRegistro(this.usuario).then(auth =>{
      this.router.navigate(['home']);
    }).catch(error =>{
      console.log("Error ",error)
    })
  }
}
