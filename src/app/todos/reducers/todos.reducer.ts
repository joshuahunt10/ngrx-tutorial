import { Action, createReducer, on } from '@ngrx/store';

import * as TodosActions from '../actions/todos.actions';
import { Todo } from '../models/todos.model';

export const todosFeatureKey = 'todos';

export interface State {
  allTodos: {
    [id: number]: Todo
  }
}

export const initialState: State = {
  allTodos: {}
};

const createNewTodoReducer = on(TodosActions.createNewTodoSuccess, (state: State, { todo }) => {
  const newId = Object.keys(state.allTodos).length + 1
  const newTodos = {
    ...state.allTodos,
    [newId]: {
      id: newId,
      text: todo.text,
      complete: todo.complete
    }
  }
  return { ...state, allTodos: newTodos }
})

const loadTodosReducer = on(TodosActions.loadTodosSuccess, (state: State, { data }) => {
  const todoMap = data.reduce((acc, todo: Todo) => ({
    ...acc, [todo.id]: { ...todo }
  }), {})
  return {...state, allTodos: todoMap}
})

const todosReducer = createReducer(
  initialState,
  loadTodosReducer,
  on(TodosActions.loadTodosSuccess, (state, action) => state),
  on(TodosActions.loadTodosFailure, (state, action) => state),
  createNewTodoReducer

);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
