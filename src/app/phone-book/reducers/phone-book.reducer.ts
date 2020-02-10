import { on, createReducer, Action } from '@ngrx/store';

import { Contact } from '../models/phone-book.model';
import * as PhoneBookActions from '../actions/phone-book.actions';

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

const createNewContactReducer = on(PhoneBookActions.createContactSuccess, (state: State, { contact }) => {
  console.log('contact', contact)
  const newId = Object.keys(state.allContacts).length + 1;
  const newContacts = {
    ...state.allContacts,
    [newId]: {
      id: newId,
      ...contact
    }
  }
  return {...state, allContacts: newContacts}
})

const phoneBookReducer = createReducer(
  initialState,
  loadContactsReducer,
  createNewContactReducer
);

export function reducer(state: State | undefined, action: Action) {
  return phoneBookReducer(state, action)
}
