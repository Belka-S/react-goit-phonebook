import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

// Contacts items
const handleFetchContacts = (_, action) => action.payload;
const handleAddContact = (state, action) => {
  state.push(action.payload);
};
const handleDeleteContact = (state, action) =>
  state.filter(el => el.id !== action.payload.id);

const contactsItemsSlice = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact);
  },
});

// isLoading
const contactsIsLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  extraReducers: builder => {
    builder
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => true
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled' || '/rejected'),
        state => false
      );
  },
});

// Error
const contactsErrorSlice = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: builder => {
    builder
      .addMatcher(
        action => action.type.endsWith('/pending' || '/fulfilled'),
        state => null
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => action.payload
      );
  },
});

export const contactsReducer = combineReducers({
  items: contactsItemsSlice.reducer,
  isLoading: contactsIsLoadingSlice.reducer,
  error: contactsErrorSlice.reducer,
});

// ----------------------contactsSlice---------------------- //

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: [], isLoading: false, error: null },
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       // fetchContacts
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.items = action.payload;
//       })
//       // addContact
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })
//       // deleteContact
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.items = state.items.filter(el => el.id !== action.payload.id);
//       })
//       .addMatcher(
//         action => action.type.endsWith('/pending'),
//         state => {
//           state.isLoading = true;
//         }
//       )
//       .addMatcher(
//         action => action.type.endsWith('/fulfilled'),
//         state => {
//           state.isLoading = false;
//           state.error = null;
//         }
//       )
//       .addMatcher(
//         action => action.type.endsWith('/rejected'),
//         (state, action) => {
//           state.isLoading = false;
//           state.error = action.payload;
//         }
//       );
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
