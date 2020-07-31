import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  async signUpWithEmail() {
    await  this.auth.entrarEmail(this.email, this.password).then( auth =>{
      this.router.navigate(['publicar-poesia']);
    }).catch(error =>{
      console.log("Error inicio sesion ", error);
      
    });
  }

}
