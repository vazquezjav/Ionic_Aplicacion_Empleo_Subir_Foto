import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerPoesiaPageRoutingModule } from './ver-poesia-routing.module';

import { VerPoesiaPage } from './ver-poesia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPoesiaPageRoutingModule
  ],
  declarations: [VerPoesiaPage]
})
export class VerPoesiaPageModule {}
