import { Component, OnInit } from '@angular/core';

import { GeneratorService } from './common/generator.service';

import { PetItemData } from './common/types';
import names from './common/names';

const numberRange: [number, number] = [20, 30];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public dogsList: PetItemData[] = [];
  public catsList: PetItemData[] = [];

  constructor(private readonly generator: GeneratorService) {}

  ngOnInit() {
    this.dogsList = this.generator.generateList(names, numberRange, 10);
    this.catsList = this.generator.generateList(names, numberRange, 10);
  }

  add(list: PetItemData[], name: string): void {
    list.unshift({ name: name, number: this.generator.generateNumber(numberRange) });
  }

  remove(list: PetItemData[], node: PetItemData): void {
    list.splice(list.indexOf(node), 1);
  }
}
