import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddkontakComponent } from './addkontak.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AddkontakComponent, }
]

@NgModule({
  declarations: [
    AddkontakComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AddkontakModule { }
