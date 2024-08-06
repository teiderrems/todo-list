import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return (value as string).split(" ").map(w=>{
      let str=w.charAt(0).toUpperCase();
      for (let index = 1; index < w.length; index++) {
        str+=w[index];
      }
      return str;
    }).join(" ");
  }

}
