import { Component, OnInit,Input,OnChanges,DoCheck ,AfterContentInit,AfterContentChecked} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked {

  constructor() { }
  @Input()
  datafromparent : string;
  @Input()
  datafromparent2 : any;
  ngOnInit() {
   
  }
  ngOnChanges(){
 
    console.log(this.datafromparent2);
  }
  ngDoCheck(){
    //console.log(this.datafromparent2);
  }
 ngAfterContentInit(){
  //console.log("ngAfterContentInit");
 }
ngAfterContentChecked(){
//console.log("ngAfterContentChecked");
}
}
