import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { PetItemData } from '../common/types';

import { List } from 'immutable';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PetListComponent {
  @Input() public readonly title: string;
  @Input() public readonly data: List<PetItemData>;

  @Output('add') private readonly onAdd: EventEmitter<string> = new EventEmitter<string>();
  @Output('remove') private readonly onRemove: EventEmitter<PetItemData> = new EventEmitter<PetItemData>();

  add(name: string): void {
    this.onAdd.emit(name);
  }

  remove(petItem: PetItemData): void {
    this.onRemove.emit(petItem);
  }
}
