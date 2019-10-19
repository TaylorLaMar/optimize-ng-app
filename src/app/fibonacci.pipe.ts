import { Pipe, PipeTransform } from '@angular/core';

import { fibonacci } from './common/utils';

@Pipe({
  name: 'fibonacci',
  pure: true
})
export class FibonacciPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return fibonacci(value);
  }
}
