import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent as TodoList } from './todos/list/list.component';
const routes:Routes=[
  {
    path:'todos',
    component:TodoList
  },
  {path: '**', redirectTo: 'todos'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
