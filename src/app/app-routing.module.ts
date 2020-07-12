import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hello',
    loadChildren: () => import('./hello/hello.module').then( m => m.HelloPageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then( m => m.DataPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./experiencia/experiencia.module').then( m => m.ExperienciaPageModule)
  },
  {
    path: 'noexperiencia',
    loadChildren: () => import('./noexperiencia/noexperiencia.module').then( m => m.NoexperienciaPageModule)
  },
  {
    path: 'estudios',
    loadChildren: () => import('./estudios/estudios.module').then( m => m.EstudiosPageModule)
  },
  {
    path: 'final',
    loadChildren: () => import('./final/final.module').then( m => m.FinalPageModule)
  },
  {
    path: 'lista-empleos',
    loadChildren: () => import('./shared/pages/lista-empleos/lista-empleos.module').then( m => m.ListaEmpleosPageModule)
  },
  {
    path: 'empleo/:id',
    loadChildren: () => import('./shared/pages/empleo/empleo.module').then( m => m.EmpleoPageModule)
  },
  {
    path: 'crear-empleo',
    loadChildren: () => import('./shared/pages/crear-empleo/crear-empleo.module').then( m => m.CrearEmpleoPageModule)
  },
  {
    path: 'editar-empleo',
    loadChildren: () => import('./shared/pages/editar-empleo/editar-empleo.module').then( m => m.EditarEmpleoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
