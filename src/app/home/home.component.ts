import { Component, OnInit, AfterContentInit, AfterViewChecked,OnChanges,OnDestroy } from '@angular/core';
import {OrderService} from '../order/order.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable, Subject,BehaviorSubject,ReplaySubject } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit, AfterViewChecked,OnChanges,OnDestroy {
userDetail : any = {email:"sujitk2@chetu.com",age:20};
firstname : string = "sujit";
data : any;
subscription: Subscription;
message: any;

  constructor(private _orderservice:OrderService) {
    
   }

  ngOnInit() {
   // Example behaviour subject 
  let sub = new BehaviorSubject<string>("first");
   sub.next("second");
   sub.next("third");
   sub.next("fourth");
sub.subscribe((data)=>{
  //console.log(data);
});
sub.next("five");

//example replay subject
let rsub = new ReplaySubject(2);
rsub.next("r1");
rsub.next("r2");
rsub.next("r3");
rsub.subscribe((rdata)=>{
//  console.log(rdata);
});
rsub.next("r4");
rsub.subscribe((rdata)=>{
  console.log(rdata);
});
    this.getdata();
  }
  
  ngAfterContentInit() {

  }
  ngAfterViewChecked() {

  }
  ngOnChanges(){

  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
  changename(){
 

  let obj = Object.assign({},this.userDetail);

  obj.email = "harshl@chetu.com";
  this.userDetail = obj;

  }
  ngAfterContentChecked(){
    //console.log("ngAfterContentCheckedparent");
    }
 getdata(){
this.subscription =this._orderservice.sendData().subscribe((data)=>{
  this.message = data;
  console.log(this.message);
  console.log("data");
});

 }

}
