import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarPoesiaPageRoutingModule } from './publicar-poesia-routing.module';

import { PublicarPoesiaPage } from './publicar-poesia.page';
import { ImageUploadComponent } from 'src/app/components/image-upload/image-upload.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarPoesiaPageRoutingModule
  ],
  declarations: [PublicarPoesiaPage, ImageUploadComponent],
  exports: [ImageUploadComponent]
})
export class PublicarPoesiaPageModule {}
