import { fetchContacts } from 'servises/mockAPI';
import { fetchAsyncContacts } from 'redux/actions';

// to fetch Contacts
export const fetchContactsOperation = () => async dispatch => {
  const contacts = await fetchContacts();
  dispatch(fetchAsyncContacts(contacts));
};
