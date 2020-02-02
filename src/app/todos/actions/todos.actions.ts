import { createAction, props } from '@ngrx/store';
import { Todo } from '../reducers/todos.reducer';

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
