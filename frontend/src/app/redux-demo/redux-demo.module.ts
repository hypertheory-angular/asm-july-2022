import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReduxDemoComponent } from './redux-demo.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';

@NgModule({
  declarations: [ReduxDemoComponent],
  imports: [CommonModule, StoreModule.forFeature(FEATURE_NAME, reducers)],
  exports: [ReduxDemoComponent],
})
export class ReduxDemoModule {}
