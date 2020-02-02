import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TodosActions from '../actions/todos.actions';



@Injectable()
export class TodosEffects {

  loadTodoss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TodosActions.loadTodos),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => TodosActions.loadTodosSuccess({ data })),
          catchError(error => of(TodosActions.loadTodosFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
