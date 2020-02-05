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

// export const createNewTodo = createAction(
//   '[TODOS] Create New Todo',
//   props<{todo: Todo}>()
// );

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
