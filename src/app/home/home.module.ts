import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FingerprintAuthComponent } from '../components/fingerprint-auth/fingerprint-auth.component';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, FingerprintAuthComponent],
  exports :[FingerprintAuthComponent]
})
export class HomePageModule {}
