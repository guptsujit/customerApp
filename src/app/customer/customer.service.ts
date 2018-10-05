import { Injectable } from '@angular/core';
import {CustomerModel} from './customer-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  employees : CustomerModel[] = [
    {
      id : 1,
      name : "sujit1",
      email : "sujitk2@chetu.com",
      phone : 975555555,
      gender : "male",
      dob: new Date('04/01/1991')
    },
    {
      id : 2,
      name : "sujit2",
      email : "sujitk2@chetu.com",
      phone : 975555555,
      gender : "male",
      dob: new Date('04/01/1991')
    }
];
  constructor() { }

  getEmployees() : CustomerModel[]{
    return this.employees;
  }
}
