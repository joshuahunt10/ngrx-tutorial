import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducer from './reducers/todos.reducer';
import { TodosEffects } from './effects/todos.effects';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/new-todo/new-todo.component'
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
    StoreModule.forFeature(fromReducer.todosFeatureKey, fromReducer.reducer),
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosModule { }
