import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayPipe'
})
export class ArrayPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value)
    return Array.from(value);
  }

}
