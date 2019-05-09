import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { TimecardComponent } from './timecard/timecard.component';

const routes: Routes = [
  { path: '', component: TimecardComponent, pathMatch: 'full' },
  { path: 'task/:date', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
