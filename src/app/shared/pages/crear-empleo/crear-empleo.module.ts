import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEmpleoPageRoutingModule } from './crear-empleo-routing.module';

import { CrearEmpleoPage } from './crear-empleo.page';
import { TestcomponentComponent } from 'src/app/components/testcomponent/testcomponent.component';
import { ImageUploadComponent } from 'src/app/components/image-upload/image-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEmpleoPageRoutingModule
  ],
  declarations: [CrearEmpleoPage,TestcomponentComponent,ImageUploadComponent],
  exports: [TestcomponentComponent,ImageUploadComponent]
})
export class CrearEmpleoPageModule {}
