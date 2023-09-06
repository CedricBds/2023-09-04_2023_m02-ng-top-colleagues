import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoreHistory'
})
export class ScoreHistoryPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value != undefined && value === 0) {
      return 'est liké';
    }
    if (value != undefined && value === 1) {
      return 'est détesté';
    }
    return null;
  }

}
