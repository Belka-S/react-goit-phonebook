import { createAsyncThunk } from '@reduxjs/toolkit';
import * as mockAPI from 'servises/mockAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => await mockAPI.fetchContacts()
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => await mockAPI.addContact(contact)
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => await mockAPI.deleteContact(id)
);
