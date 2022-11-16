import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      // { path: 'detail', loadChildren: () => import('../detail/detail.module').then(m => m.DetailModule) },
    //   { path: 'account', loadChildren: () => import('../../pages/account/account.module').then(m => m.AccountModule) },
    //   { path: 'rform', loadChildren: () => import('../../pages/reactiveformsample/reactiveformsample.module').then(m => m.ReactiveformsampleModule) },
    //   { path: 'dashboard', redirectTo: '' },
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
