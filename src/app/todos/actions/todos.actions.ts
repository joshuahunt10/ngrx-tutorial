import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todos.model';


export const loadTodos = createAction(
  '[TODOS] Load Todos'
);

export const loadTodosSuccess = createAction(
  '[TODOS] Load Todos Success',
  props<{ data: any }>()
);

export const loadTodosFailure = createAction(
  '[TODOS] Load Todos Failure',
  props<{ error: any }>()
);

export const createNewTodo = createAction(
  '[TODOS] Create New Todo',
  props<{todo: Todo}>()
);
