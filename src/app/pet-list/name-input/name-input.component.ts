import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent {
  public newPetName: string = '';

  @Output('add') private readonly onAdd: EventEmitter<string> = new EventEmitter<string>();

  add(): void {
    if (this.newPetName) {
      this.onAdd.emit(this.newPetName);
      this.newPetName = '';
    }
  }
}
