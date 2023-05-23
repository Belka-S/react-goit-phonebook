import { createAction } from '@reduxjs/toolkit';

export const setFilterValue = createAction('filter/setFilterValue');

// pending
export const fetchContactsPending = createAction('fetchContacts/Pending');
export const addContactPending = createAction('addContact/Pending');
export const deleteContactPending = createAction('deleteContact/Pending');
// fulfilled
export const fetchContactsFulfilled = createAction('fetchContacts/Fulfilled');
export const addContactFulfilled = createAction('addContact/Fulfilled');
export const deleteContactFulfilled = createAction('deleteContact/Fulfilled');
// rejected
export const fetchContactsRejected = createAction('fetchContacts/Rejected');
export const addContactRejected = createAction('addContact/Rejected');
export const deleteContactRejected = createAction('deleteContact/Rejected');
