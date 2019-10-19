import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

import { PetItemData } from '../../common/types';
import { fibonacci } from '../../common/utils';

import { List } from 'immutable';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  @Input() public readonly data: List<PetItemData>;
  @Output('remove') private readonly onRemove: EventEmitter<PetItemData> = new EventEmitter<PetItemData>();

  calculate(number: number): void {
    return fibonacci(number);
  }

  remove(petItem: PetItemData): void {
    this.onRemove.emit(petItem);
  }
}
