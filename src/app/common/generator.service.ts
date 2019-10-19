import { Injectable } from '@angular/core';

import { PetItemData } from './types';

import { fibonacci } from './utils';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  generateList(dictionary: string[], numberRange: [number, number], numberOfElements: number): PetItemData[] {
    const list: PetItemData[] = [];

    for (let i = 0; i < numberOfElements; i++) {
      const index: number = this.generateNumber([0, dictionary.length - 1]);
      const fibonacciArg: number = this.generateNumber(numberRange);

      const node = {
        name: dictionary[index],
        number: fibonacciArg
      };

      list.push(node);
    }

    return list;
  }

  generateNumber(numberRange: [number, number]): number {
    const min = numberRange[0];
    const max = numberRange[1];

    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
  }
}
