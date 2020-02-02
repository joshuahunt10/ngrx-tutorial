import { Action, createReducer, on } from '@ngrx/store';
import * as TodosActions from '../actions/todos.actions';

export const todosFeatureKey = 'todos';

export interface Todo {
  text: string,
  complete: boolean
}

export interface State {
  allTodos: {
    [id: string]: Todo
  }
}

export const initialState: State = {
  allTodos: {
    '1': {
      text: 'Work on demo',
      complete: false
    }
  }
};

const createNewTodoReducer = on(TodosActions.createNewTodo, (state: State, { todo }) => {
  console.log('state', state);
  console.log('todo', todo);

  const heyo = {...state.allTodos, '2': {text: todo.text, complete: todo.complete}}
  return {allTodos: heyo}
})

const todosReducer = createReducer(
  initialState,
  on(TodosActions.loadTodos, state => state),
  on(TodosActions.loadTodosSuccess, (state, action) => state),
  on(TodosActions.loadTodosFailure, (state, action) => state),
  createNewTodoReducer

);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
