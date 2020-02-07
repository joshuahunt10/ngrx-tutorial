import { Contact } from '../models/phone-book.model';
import * as PhoneBookActions from '../actions/phone-book.actions';
import { on, createReducer, Action } from '@ngrx/store';

export const phoneBookFeatureKey = 'phonebook';

export interface State {
  allContacts: {
    [id: number]: Contact
  }
}

export const initialState: State = {
  allContacts: {}
}

const loadContactsReducer = on(PhoneBookActions.loadContactsSuccess, (state: State, { data }) => {
  const contactMap = data.reduce((acc, contact: Contact) => ({
    ...acc, [contact.id]: { ...contact }
  }), {})
  return { ...state, allContacts: contactMap }
})

const phoneBookReducer = createReducer(
  initialState,
  loadContactsReducer
);

export function reducer(state: State | undefined, action: Action) {
  return phoneBookReducer(state, action)
}
