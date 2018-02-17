import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var result = "Respected " + value;
    return result;
  }
}
