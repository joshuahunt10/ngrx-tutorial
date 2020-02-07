import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { PhoneBookService } from '../services/phone-book.service';

import * as PhoneBookAction from '../actions/phone-book.actions';
import { concatMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PhoneBookEffects {
  loadContacts = createEffect(() => {
    return this.actions$.pipe(
      ofType(PhoneBookAction.loadContactsRequest),
      concatMap(() => this.phoneBookService.getContacts().pipe(
        map(data => PhoneBookAction.loadContactsSuccess({ data })),
        catchError(error => of(PhoneBookAction.loadContactsFailure({ error })))
      ))
    )
  })

  constructor(
    private actions$: Actions,
    private phoneBookService: PhoneBookService
  ) { }
}
