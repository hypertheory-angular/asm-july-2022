import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxDemoComponent } from './redux-demo.component';

@NgModule({
  declarations: [ReduxDemoComponent],
  imports: [CommonModule],
  exports: [ReduxDemoComponent],
})
export class ReduxDemoModule {}
