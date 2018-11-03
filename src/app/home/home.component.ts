import { Component, OnInit,SimpleChanges,Input, AfterContentInit,
   AfterViewChecked,OnChanges,OnDestroy,ViewEncapsulation,AfterViewInit,
   ChangeDetectionStrategy ,NgZone,ViewChild,ViewChildren,ContentChild,
   ContentChildren,QueryList,ElementRef,AfterContentChecked
  } from '@angular/core';
import {OrderService} from '../order/order.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable, Subject,BehaviorSubject,ReplaySubject } from 'rxjs';
import { Store } from '@ngrx/store';




@Component({
  selector: 'app-home',
 // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterContentInit, AfterViewChecked,
OnChanges,OnDestroy,AfterViewInit,AfterContentChecked {
userDetail : any = {email:"sujitk2@chetu.com",age:20};
@Input()
firstname1 : string;
firstname2 : string = "sujit2";
data : any;
subscription: Subscription;
message: any;
exampleAsync :Promise<string>;
exampleAsync2 :Observable<any>;
count : any
@ViewChildren('child1') child1:any
@ContentChildren('contentChild1') allFriendsRef: QueryList<ElementRef> ;
@ViewChild('contentChild2') nameRef: any;
//@ViewChild('test') child2:any
// Since store type is generic so we will have to pass generic argumnet here
// otherwise it will give error
  constructor(private _orderservice:OrderService,private store : Store<{}>) {
   
   }

  ngOnInit() {
  
   this.store.select('customer').subscribe((obj)=>{
    this.count =  obj.count;
    });


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


    this.exampleAsync = new Promise((resolve,reject)=>{
      return resolve("Async promise example");
    })
  
    this.exampleAsync2 = new Observable((obserber)=>{
    
       obserber.next("Hello observable async pipe");
       
    })
    console.log(this.exampleAsync2);


  }
  
  ngAfterContentInit() {
    
    console.log(this.nameRef);
    console.log(this.allFriendsRef);
  }
  ngAfterContentChecked() {
    console.log(this.allFriendsRef);
  }
  ngAfterViewInit() {
    this.nameRef.nativeElement.style.backgroundColor="red";
    console.log(this.child1);
       
      }
  ngAfterViewChecked() {
    
  }
  ngOnChanges(obj:SimpleChanges){
    alert(1);
     console.log(obj);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
  changename(){
 
  let obj = Object.assign({},this.userDetail);
  obj.email = "harshl@chetu.com";
  this.userDetail = obj;
  this.userDetail.email = "sujitk4@chetu.com";
  }
 
 getdata(){
this.subscription =this._orderservice.sendData().subscribe((data)=>{
  this.message = data;
  console.log(this.message);
  console.log("data");
});

 }
 test(data){
  console.log(data);
 }

countNumber(){
  this.store.dispatch({type:"ADD",number:3});
}
 
}
