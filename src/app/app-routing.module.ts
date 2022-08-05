import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametrageComponent } from './parametrage/parametrage.component';

const routes: Routes = [
  {
    path : "parametrage",
    component : ParametrageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
