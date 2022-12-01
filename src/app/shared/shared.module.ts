import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

import { CounterInputComponent } from './components/counter-input/counter-input.component';

@NgModule({
  declarations: [CounterInputComponent, FilterPipe, SortPipe],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [CounterInputComponent, MaterialModule, FilterPipe, SortPipe],
})
export class SharedModule {}
