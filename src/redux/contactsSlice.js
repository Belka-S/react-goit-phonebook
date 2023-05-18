import { createSlice, nanoid } from '@reduxjs/toolkit';

import contacts from 'data/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        const isInContacts = state.some(
          el => el.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (isInContacts) {
          return alert(`${action.payload.name} is already in contacts!`);
        }
        state.push(action.payload);
      },
      prepare: values => ({ payload: { ...values, id: nanoid() } }),
    },

    deleteContact: (state, action) =>
      state.filter(el => el.id !== action.payload.id),
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
