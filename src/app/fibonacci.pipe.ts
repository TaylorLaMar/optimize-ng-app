import { Pipe, PipeTransform } from '@angular/core';

import { fibonacci } from './common/utils';

import memo from 'memo-decorator';

@Pipe({
  name: 'fibonacci',
  pure: true
})
export class FibonacciPipe implements PipeTransform {
  @memo()
  transform(value: any, ...args: any[]): any {
    console.log('value', value);
    return fibonacci(value);
  }
}
