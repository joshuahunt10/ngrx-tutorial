import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from './reducers/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './effects/todos.effects';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/new-todo/new-todo.component'
import { ReactiveFormsModule } from '@angular/forms';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  declarations: [
    TodosComponent,
    TodoListComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromTodos.todosFeatureKey, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosModule { }
