import { Component, OnInit } from '@angular/core';

import { GeneratorService } from './common/generator.service';

import { PetItemData } from './common/types';
import names from './common/names';

import { List } from 'immutable';

const numberRange: [number, number] = [20, 30];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public dogsList: List<PetItemData>;
  public catsList: List<PetItemData>;

  constructor(private readonly generator: GeneratorService) {}

  ngOnInit() {
    this.dogsList = List(this.generator.generateList(names, numberRange, 150));
    this.catsList = List(this.generator.generateList(names, numberRange, 150));
  }

  add(list: List<PetItemData>, name: string): List<PetItemData> {
    return list.unshift({ name: name, number: this.generator.generateNumber(numberRange) });
  }

  remove(list: List<PetItemData>, node: PetItemData): List<PetItemData> {
    return list.splice(list.indexOf(node), 1);
  }
}
