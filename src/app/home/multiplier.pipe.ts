import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier'
})
export class MultiplierPipe implements PipeTransform {

  transform(value: any, args?: any,arg2?:any): any {

  //  alert(arg2);
    return null;
  }

}
