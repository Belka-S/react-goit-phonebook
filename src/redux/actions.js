// import { createAction, nanoid } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const setFilterValue = filterValue => ({
  type: 'filter/setFilterValue',
  payload: filterValue,
});

export const deleteContact = contact => ({
  type: 'contacts/deleteContact',
  payload: contact,
});

export const addContact = values => ({
  type: 'contacts/addContact',
  payload: { ...values, id: nanoid() },
});

// -----------------------------toolkit----------------------------- //

// export const setFilterValue = createAction('filter/setFilterValue');

// export const deleteContact = createAction('contacts/deleteContact');

// export const addContact = createAction('contacts/addContact', values => ({
//   payload: { ...values, id: nanoid() },
// }));
