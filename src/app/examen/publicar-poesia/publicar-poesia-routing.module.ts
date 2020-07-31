import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarPoesiaPage } from './publicar-poesia.page';

const routes: Routes = [
  {
    path: '',
    component: PublicarPoesiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarPoesiaPageRoutingModule {}
