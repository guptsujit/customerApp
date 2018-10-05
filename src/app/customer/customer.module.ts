import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CutomerListComponent } from './cutomer-list.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CutomerListComponent]
})
export class CustomerModule { }
