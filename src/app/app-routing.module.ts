import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {
    path: 'customerlist',
    //loadChildren: './customer/customer.module#CustomerModule'
    loadChildren: "./customer/customer.module#CustomerModule"
  },
  {
    path: 'orderlist',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
