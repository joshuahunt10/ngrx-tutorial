import { createFeatureSelector, createSelector } from '@ngrx/store'

import * as fromReducer from '../reducers/phone-book.reducer';
import { ContactsMap } from '../models/phone-book.model';

export const selectPhoneBookState = createFeatureSelector<fromReducer.State>(fromReducer.phoneBookFeatureKey);

export const selectAllContactsMap = createSelector(
  selectPhoneBookState,
  (phoneBookState: fromReducer.State) => phoneBookState.allContacts
)

export const selectAllContactsList = createSelector(
  selectAllContactsMap,
  (allContacts: ContactsMap) => Object.values(allContacts)
)
