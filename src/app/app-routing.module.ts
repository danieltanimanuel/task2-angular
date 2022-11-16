import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./layouts/main/main.module').then(m => m.MainModule) },
  { path: 'detail/:id', loadChildren: () => import('./layouts/detail/detail.module').then(m => m.DetailModule)},
  { path: 'addkontak', loadChildren: () => import('./layouts/addkontak/addkontak.module').then(m => m.AddkontakModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
