import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';


@Component({
  selector: 'app-fingerprint-auth',
  templateUrl: './fingerprint-auth.component.html',
  styleUrls: ['./fingerprint-auth.component.scss'],
})
export class FingerprintAuthComponent implements OnInit {

  @Input() icon:string;

  @Output() finish = new EventEmitter<any>();
 // @Output()
  constructor(public androidFingerprintAuth: AndroidFingerprintAuth) { }

  contador: number=0;
  ngOnInit() {}

  calcular(){
    this.contador = this.contador + 1;

    this.finish.emit(this.icon);
  }

  autenticar(){
    console.log(this.icon);
    this.androidFingerprintAuth.isAvailable().then((result)=>{

      if(result.isAvailable){
        this.androidFingerprintAuth.encrypt({
          clientId:"clientid", 
          username:"username",
          password:"password"
        }).then((result)=>{
          if(result.withFingerprint){
            this.finish.emit(alert("Acceso Correcto"))
            //alert("Credenciales: "+result.token)
          }else if(result.withBackup){
            this.finish.emit(alert("Acceso correcto"));
            }
          else{
            this.finish.emit(alert("No se puede autentificar"));
            //navigator['app'].exitApp();
          }
        },(err =>{
          if(err === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED){
            this.finish.emit(alert("Autentificacion cancelada"));
            navigator['app'].exitApp();
          }else{
            //alert(JSON.stringify(err));
          }
        }))
      }else{
        alert("Autentificacion no valida");
        navigator['app'].exitApp();

        
      }
    }).catch(error=>{
      alert(JSON.stringify(error));
      
    });
  }
}
