import { Injectable ,OnInit} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() {
    
   }
 
  subject = new Subject<any>();

  getData(){
    this.subject.next("hello1");
    this.subject.next("hello2");
    this.subject.next("hello3");

  }
  clearMessage() {
    this.subject.next();
}
 sendData():Observable<any>{
  this.subject.next("hello1");
  this.subject.next("hello2");
  //this.subject.next("hello3");
   return this.subject.asObservable();
 }
}
