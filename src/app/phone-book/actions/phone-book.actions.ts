import { createAction, props } from '@ngrx/store';

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
  props<{contact: any}>()
);

export const createContactSuccess = createAction(
  '[PHONE] Create Contact Success',
  props<{contact: any}>()
);

export const createContactFailure = createAction(
  '[PHONE] Create Contact Failure',
  props<{ error: any }>()
);
