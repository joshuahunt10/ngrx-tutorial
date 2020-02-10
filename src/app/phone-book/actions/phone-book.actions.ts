import { createAction, props } from '@ngrx/store';

import { Contact } from '../models/phone-book.model';

export const loadContactsRequest = createAction(
  '[PHONE] Load Contacts Request'
);

export const loadContactsSuccess = createAction(
  '[PHONE] Load Contacts Success',
  props<{ data: any }>()
);

export const loadContactsFailure = createAction(
  '[PHONE] Load Contacts Failure',
  props<{ error: any }>()
);

export const createContactRequest = createAction(
  '[PHONE] Create Contact Request',
  props<{contact: Contact}>()
);

export const createContactSuccess = createAction(
  '[PHONE] Create Contact Success',
  props<{contact: Contact}>()
);

export const createContactFailure = createAction(
  '[PHONE] Create Contact Failure',
  props<{ error: any }>()
);
