import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TodosActions from '../actions/todos.actions';
import { TodoService } from '../services/todo.service'



@Injectable()
export class TodosEffects {

  loadTodoss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TodosActions.loadTodos),
      concatMap(() =>
        this.todoService.getTodos().pipe(
          map(data => TodosActions.loadTodosSuccess({ data })),
          catchError(error => of(TodosActions.loadTodosFailure({ error }))))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private todoService: TodoService
    ) {}

}
