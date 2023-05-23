import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: builder => {
    builder
      // fetchContacts
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      // addContact
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // deleteContact
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(el => el.id !== action.payload.id);
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
