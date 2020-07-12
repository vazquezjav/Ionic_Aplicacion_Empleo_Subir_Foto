import { Component, OnInit } from '@angular/core';
import { Empleo } from '../../model/empleo';
import { EmpleosService } from '../../services/empleos.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.page.html',
  styleUrls: ['./crear-empleo.page.scss'],
})
export class CrearEmpleoPage implements OnInit {

  empleo: Empleo = new Empleo()
  base64Image: any

  private myToast: any;

  icono:string="camera";
  constructor(private empleosService: EmpleosService,public router: Router,
       private camera: Camera, private toast: ToastController) { }

  ngOnInit() {
  }
  showToast() {
    this.myToast = this.toast.create({
      message: ' Prueba Toast',
      cssClass: "my-toast ",
      duration: 2000
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }

  showCrearEmpleo(){
    this.router.navigate([`lista-empleos`])
  }
  async guardarEmpleo(){
    //console.log(this.empleo)
    //this.empleosService.insertEmpleo(this.empleo)

    let number = await this.empleosService.saveEmpleado2(this.empleo);
    console.log("Registro almacenado ",number);

    this.showCrearEmpleo()

  }

  tomarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     console.log(this.base64Image);
    }, (err) => {
     // Handle error 
     console.log(err)
    });
  }

  saludar(data:any){
    console.log("Hola ",data)

  }

  imagenCargada(e){
    console.log("imagen Cargada",e);
    console.log(JSON.stringify(e));

    this.empleo.imagen=e;
  }

}
