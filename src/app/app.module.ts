import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { GeneratorService } from './common/generator.service';

@NgModule({
  declarations: [AppComponent, PetListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [GeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
