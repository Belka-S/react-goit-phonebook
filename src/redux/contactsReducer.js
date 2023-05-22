import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchAsyncContacts } from './actions';

import contacts from 'data/contacts.json';

export const contactsReducer = createReducer(contacts, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },

  [deleteContact]: (state, action) =>
    state.filter(el => el.id !== action.payload.id),

  [fetchAsyncContacts]: (state, action) => {
    console.log(action);
    return action.payload;
  },
});
