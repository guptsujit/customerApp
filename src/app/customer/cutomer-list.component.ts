import { Component, OnInit } from '@angular/core';
import {CustomerService} from './customer.service';
import {CustomerModel} from './customer-model';
@Component({
  selector: 'app-cutomer-list',
  templateUrl: './cutomer-list.component.html',
  styleUrls: ['./cutomer-list.component.css']
})
export class CutomerListComponent implements OnInit {
customers : CustomerModel[];
  constructor(private _customerService : CustomerService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.customers = this._customerService.getEmployees();
    console.log(this.customers );
  }
}
