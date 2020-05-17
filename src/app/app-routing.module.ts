import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(mod => mod.AboutModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then(mod => mod.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
