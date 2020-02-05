import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodos from '../reducers/todos.reducer';
import { TodoMap } from '../models/todos.model';

export const selectTodosState = createFeatureSelector<fromTodos.State>(
  fromTodos.todosFeatureKey
);

export const selectAllTodosMap = createSelector(
  selectTodosState,
  (todosState: fromTodos.State) => todosState.allTodos
)

export const selectTodoById = createSelector(
  selectAllTodosMap,
  (allTodos: TodoMap, props) => allTodos[props.id]
)

export const selectAllTodosList = createSelector(
  selectAllTodosMap,
  (allTodos: TodoMap) => Object.values(allTodos)
)

