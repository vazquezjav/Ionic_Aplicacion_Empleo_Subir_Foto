import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerPoesiaPage } from './ver-poesia.page';

const routes: Routes = [
  {
    path: '',
    component: VerPoesiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerPoesiaPageRoutingModule {}
