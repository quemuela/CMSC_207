import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from 'src/pages/task-list/task-list.component';
import { TaskDetailComponent } from 'src/pages/task-detail/task-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},  
  {path: 'task/:id', component: TaskDetailComponent},
  {path: 'tasks', component: TaskListComponent}    
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
