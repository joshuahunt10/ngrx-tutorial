import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from '../reducers/todos.reducer';
import { TodoMap } from '../models/todos.model';

export const selectTodosState = createFeatureSelector<fromTodos.State>(
  fromTodos.todosFeatureKey
);

export const selectAllTodos = createSelector(
  selectTodosState,
  (todosState: fromTodos.State) => todosState.allTodos
)

export const selectTodoById = createSelector(
  selectAllTodos,
  (allTodos: TodoMap, props) => allTodos[props.id]
)

