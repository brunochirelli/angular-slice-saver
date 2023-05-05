import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaSplitterModule } from '../pizza-splitter/pizza-splitter.module';
import { MaterialModule } from '../material/material.module';

const modules = [CommonModule, PizzaSplitterModule, MaterialModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
