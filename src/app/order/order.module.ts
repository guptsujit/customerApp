import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [OrderListComponent]
})
export class OrderModule { }
