// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact } from './actions';

import contacts from 'data/contacts.json';

export const contactsReducer = (state = contacts, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];

    case 'contacts/deleteContact':
      return state.filter(el => el.id !== action.payload.id);

    default:
      return state;
  }
};

// -------------------createReducer------------------- //

// export const contactsReducer = createReducer(contacts, {
//   [addContact]: (state, action) => {
//     const isInContacts = state.some(
//       el => el.name.toLowerCase() === action.payload.name.toLowerCase()
//     );
//     if (isInContacts) {
//       return alert(`${action.payload.name} is already in contacts!`);
//     }
//     state.push(action.payload);
//   },

//   [deleteContact]: (state, action) =>
//     state.filter(el => el.id !== action.payload.id),
// });

// ---------------------createSlice--------------------- //

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contacts,
//   reducers: {
//     addContact: {
//       reducer: (state, action) => {
//         const isInContacts = state.some(
//           el => el.name.toLowerCase() === action.payload.name.toLowerCase()
//         );
//         if (isInContacts) {
//           return alert(`${action.payload.name} is already in contacts!`);
//         }
//         state.push(action.payload);
//       },
//       prepare: values => ({ payload: { ...values, id: nanoid() } }),
//     },

//     deleteContact: (state, action) =>
//       state.filter(el => el.id !== action.payload.id),
//   },
// });
