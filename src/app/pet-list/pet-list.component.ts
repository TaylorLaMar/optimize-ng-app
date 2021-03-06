import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PetItemData } from '../common/types';
import { fibonacci } from '../common/utils';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  @Input() public readonly title: string;
  @Input() public readonly data: PetItemData[];

  @Output('add') private readonly onAdd: EventEmitter<string> = new EventEmitter<string>();
  @Output('remove') private readonly onRemove: EventEmitter<PetItemData> = new EventEmitter<PetItemData>();

  public newPetName: string = '';

  constructor() {}

  ngOnInit() {}

  calculate(number: number): void {
    return fibonacci(number);
  }

  add(): void {
    if (this.newPetName) {
      this.onAdd.emit(this.newPetName);
      this.newPetName = '';
    }
  }

  remove(petItem: PetItemData): void {
    this.onRemove.emit(petItem);
  }
}
