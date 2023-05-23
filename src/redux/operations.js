import * as mockAPI from 'servises/mockAPI';
import * as actions from 'redux/actions';

// fetch Contacts
export const fetchContactsOperation = () => async dispatch => {
  dispatch(actions.fetchContactsPending());

  try {
    const contacts = await mockAPI.fetchContacts();
    dispatch(actions.fetchContactsFulfilled(contacts));
  } catch (error) {
    dispatch(actions.fetchContactsRejected(error.message));
  }
};
// add Contact
export const addContactOperation = value => async dispatch => {
  dispatch(actions.addContactPending());

  try {
    const contact = await mockAPI.addContact(value);
    dispatch(actions.addContactFulfilled(contact));
  } catch (error) {
    dispatch(actions.addContactRejected(error.message));
  }
};
// delete Contact
export const deleteContactOperation = id => async dispatch => {
  dispatch(actions.deleteContactPending());

  try {
    const contact = await mockAPI.deleteContact(id);
    dispatch(actions.deleteContactFulfilled(contact.id));
  } catch (error) {
    dispatch(actions.deleteContactRejected(error.message));
  }
};
