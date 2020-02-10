import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap, } from 'rxjs/operators';

import * as TodosActions from '../actions/todos.actions';
import { TodoService } from '../services/todo.service'

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.loadTodosRequest),
      concatMap(() =>
        this.todoService.getTodos().pipe(
          map(data => TodosActions.loadTodosSuccess({ data })),
          catchError(error => of(TodosActions.loadTodosFailure({ error }))))
      )
    );
  });

  saveTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodosActions.createNewTodoRequest),
      concatMap((action) => this.todoService.addTodo(action.todo).pipe(
        map(data => TodosActions.createNewTodoSuccess({todo: data})),
        catchError(error => of(TodosActions.createNewTodoFailure({ error })))
      ))
    );
  });

  constructor(
    private actions$: Actions,
    private todoService: TodoService
    ) {}
}
