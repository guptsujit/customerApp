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
  constructor(private _customerService : CustomerService) { 

    this.getEmployees();
  }

  ngOnInit() {
   
  }

  getEmployees(){
    this.customers = this._customerService.getEmployees();
    console.log(this.customers );
  }
  getItems(){

    this.customers = this._customerService.getNewEmployeesList();
  }
  trackItems(index, item) {
    
    //console.log(this.customers );
    console.log(item.id);
    //return  item.id
  }
}
