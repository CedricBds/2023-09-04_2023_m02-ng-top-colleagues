import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score',
})
export class ScorePipe implements PipeTransform {
  transform(value: number | undefined, ...args: unknown[]): unknown {
    if (value != undefined && value > 0) {
      return '+ ' + value;
    }
    if (value != undefined && value === 0) {
      return 0;
    }
    if (value != undefined && value < 0) {
      return '- ' + value;
    }
    return null;
  }
}
