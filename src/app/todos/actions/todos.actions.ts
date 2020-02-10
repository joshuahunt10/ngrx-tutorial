import { createAction, props } from '@ngrx/store';

import { Todo } from '../models/todos.model';

export const loadTodosRequest = createAction(
  '[TODOS] Load Todos Request'
);

export const loadTodosSuccess = createAction(
  '[TODOS] Load Todos Success',
  props<{ data: any }>()
);

export const loadTodosFailure = createAction(
  '[TODOS] Load Todos Failure',
  props<{ error: any }>()
);

export const createNewTodoRequest = createAction(
  '[TODOS] Create Todo Request',
  props<{ todo: Todo }>()
);

export const createNewTodoSuccess = createAction(
  '[TODOS] Create Todo Success',
  props<{todo: Todo}>()
);

export const createNewTodoFailure = createAction(
  '[TODOS] Create Todo Failure',
  props<{ error: any }>()
);
