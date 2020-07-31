import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AndroidFingerprintAuth} from '@ionic-native/android-fingerprint-auth/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public androidFingerprintAuth: AndroidFingerprintAuth,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      /*this.androidFingerprintAuth.isAvailable().then((result)=>{

        if(result.isAvailable){
          this.androidFingerprintAuth.encrypt({
            clientId:"clientid", 
            username:"username",
            password:"password"
          }).then((result)=>{
            if(result.withFingerprint){
              alert("Acceso Correcto")
              //alert("Credenciales: "+result.token)
            }else if(result.withBackup){
                alert("Acceso correcto");
              }
            else{
              alert("No se puede autentificar");
              navigator['app'].exitApp();
            }
          },(err =>{
            if(err === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED){
              alert("Autentificacion cancelada");
              navigator['app'].exitApp();
            }else{
              alert(JSON.stringify(err));
            }
          }))
        }else{
          alert("Autentificacion no valida");
          navigator['app'].exitApp();

          
        }
      }).catch(error=>{
        alert(JSON.stringify(error));
        
      });*/
      
    });
  }
  cerrarApp(){
    this.platform.backButton.subscribe(()=>{
      console.log ('exit');
      navigator['app'].exitApp();
    })
  }
}
