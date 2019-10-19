/**
 * The `AppModule` is the "glue" that holds together all of the building blocks
 * of an Angular application.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { GeneratorService } from './common/generator.service';
import { NameInputComponent } from './pet-list/name-input/name-input.component';
import { ListComponent } from './pet-list/list/list.component';
import { FibonacciPipe } from './fibonacci.pipe';

@NgModule({
  declarations: [AppComponent, PetListComponent, NameInputComponent, ListComponent, FibonacciPipe],
  imports: [BrowserModule, FormsModule],
  providers: [GeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
