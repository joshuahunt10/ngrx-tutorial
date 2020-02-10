import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from '../reducers/todos.reducer';
import { TodoMap } from '../models/todos.model';

export const selectTodosState = createFeatureSelector<fromReducer.State>(
  fromReducer.todosFeatureKey
);

export const selectAllTodosMap = createSelector(
  selectTodosState,
  (todosState: fromReducer.State) => todosState.allTodos
)

export const selectTodoById = createSelector(
  selectAllTodosMap,
  (allTodos: TodoMap, props) => allTodos[props.id]
)

export const selectAllTodosList = createSelector(
  selectAllTodosMap,
  (allTodos: TodoMap) => Object.values(allTodos)
)

