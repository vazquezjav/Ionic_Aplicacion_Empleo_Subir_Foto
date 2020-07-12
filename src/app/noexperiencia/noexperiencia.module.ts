import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoexperienciaPageRoutingModule } from './noexperiencia-routing.module';

import { NoexperienciaPage } from './noexperiencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoexperienciaPageRoutingModule
  ],
  declarations: [NoexperienciaPage]
})
export class NoexperienciaPageModule {}
