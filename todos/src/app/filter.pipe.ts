import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value) {
    let arr= [] 
    for ( let i of value){
      arr.push(i)
    }
  return arr.reverse().join()
  }

}
