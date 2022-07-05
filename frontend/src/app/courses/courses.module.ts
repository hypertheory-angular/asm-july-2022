import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ListComponent } from './components/list/list.component';

const routes:Routes = [
  {
    path: 'courses',
    component: CoursesComponent
  }
]

@NgModule({
  declarations: [
    CoursesComponent,
    RegisterComponent,
    ListComponent
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
