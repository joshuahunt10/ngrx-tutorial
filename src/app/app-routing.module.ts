import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  // {
  //   path: 'todos',
  //   component: TodosComponent
  // },
  { path: 'todos', loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule) },
  { path: 'phonebook', loadChildren: () => import('./phone-book/phone-book.module').then(m => m.PhoneBookModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
