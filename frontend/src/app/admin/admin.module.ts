import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FEATURE_NAME, reducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { CoursesFeatureEffects } from './state/effects/feature.effects';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(FEATURE_NAME, reducers),
    EffectsModule.forFeature([CoursesFeatureEffects]),
  ],
  exports: [RouterModule],
})
export class AdminModule {}
