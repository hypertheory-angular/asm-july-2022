import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path: 'courses',
    component: CoursesComponent
  }
]

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,

  ]
})
export class CoursesModule { }
