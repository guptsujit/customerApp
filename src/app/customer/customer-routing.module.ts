import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CutomerListComponent } from './cutomer-list.component';
const routes: Routes = [
  {path:'' , component:CutomerListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
