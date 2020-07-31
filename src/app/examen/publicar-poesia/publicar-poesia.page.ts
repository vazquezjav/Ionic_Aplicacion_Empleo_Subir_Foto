import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Poesia } from '../registro/modelo/poesia';
import { Observable } from 'rxjs';
import { Usuario } from '../registro/modelo/usuario';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-publicar-poesia',
  templateUrl: './publicar-poesia.page.html',
  styleUrls: ['./publicar-poesia.page.scss'],
})
export class PublicarPoesiaPage implements OnInit {
  //myDate: string = new Date().toISOString();
  myDate:Date = new Date();
  user:Usuario = new Usuario();
  uid:string;
  poesia: Poesia = new Poesia();

  usuario:Observable<any[]>
  autor:string;

  base64Image: any;
  icono:string="camera";
  
  constructor(private route: ActivatedRoute, public router: Router,
    private auth: AuthService, private camera: Camera) { }

  ngOnInit() {
    this.auth.getCurrentUser().then(user =>{
      this.auth.user.subscribe(data =>{
        this.uid = data.uid
        console.log("UID ",  this.uid)
      })
     }).catch(err => console.log(err));

     
  }
  imagenCargada(e){
    console.log("imagen Cargada",e);
    console.log(JSON.stringify(e));

    this.poesia.imagen=e;
  }

  guardar(){
    
    this.poesia.fecha = this.myDate;
    this.poesia.autor = this.autor;
    if(this.poesia.autor ='undefined'){
      console.log("ooo")
    }else{
      
    }
    console.log(this.poesia.autor)
    

  }

  nuevo(){
    this.auth.getUser(this.uid).subscribe(resul =>{
      this.autor = resul.nombre
      this.poesia.autor = resul.nombre
      this.poesia.fecha = this.myDate;
      
      this.auth.insertPoesia(this.poesia);
      
    });
    
  }
}
