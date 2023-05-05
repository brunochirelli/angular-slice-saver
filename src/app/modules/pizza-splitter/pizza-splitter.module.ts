import { NgModule } from '@angular/core';
import { SplitterFormComponent } from './components/splitter-form/splitter-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const components = [SplitterFormComponent];
const modules = [CommonModule];

@NgModule({
  declarations: [...components],
  imports: [...modules, ReactiveFormsModule],
  exports: [...components],
})
export class PizzaSplitterModule {}
