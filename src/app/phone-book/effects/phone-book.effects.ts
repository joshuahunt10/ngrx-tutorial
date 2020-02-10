import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { concatMap, map, catchError, tap } from 'rxjs/operators';

import { PhoneBookService } from '../services/phone-book.service';
import * as PhoneBookAction from '../actions/phone-book.actions';

@Injectable()
export class PhoneBookEffects {
  loadContacts = createEffect(() => {
    return this.actions$.pipe(
      ofType(PhoneBookAction.loadContactsRequest),
      concatMap(() => this.phoneBookService.getContacts().pipe(
        map(data => PhoneBookAction.loadContactsSuccess({ data })),
        catchError(error => of(PhoneBookAction.loadContactsFailure({ error })))
      ))
    );
  });

  saveContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PhoneBookAction.createContactRequest),
      tap(console.log),
      concatMap((action) => this.phoneBookService.addContact(action.contact).pipe(
        map(data => PhoneBookAction.createContactSuccess({ contact: data })),
        catchError(error => of(PhoneBookAction.createContactFailure({ error })))
      ))
    )
  })

  constructor(
    private actions$: Actions,
    private phoneBookService: PhoneBookService
  ) { }
}
