import { createAction, nanoid } from '@reduxjs/toolkit';

// to describe the type of action as an argument
export const setFilterValue = createAction('filter/setFilterValue');

export const deleteContact = createAction('contacts/deleteContact');

//  to write additional logic for creating a payload value
export const addContact = createAction('contacts/addContact', values => ({
  payload: { ...values, id: nanoid() },
}));
