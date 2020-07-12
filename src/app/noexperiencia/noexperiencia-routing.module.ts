import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoexperienciaPage } from './noexperiencia.page';

const routes: Routes = [
  {
    path: '',
    component: NoexperienciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoexperienciaPageRoutingModule {}
