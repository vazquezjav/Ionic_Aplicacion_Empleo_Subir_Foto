import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataPage } from './data.page';

const routes: Routes = [
  {
    path: '',
    component: DataPage
  },
  {
    path: 'aux',
    loadChildren: () => import('./aux/aux.module').then( m => m.AuxPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataPageRoutingModule {}
