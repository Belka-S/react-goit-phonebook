import axios from 'axios';

axios.defaults.baseURL = 'https://6469c172183682d61445c3b7.mockapi.io';
axios.defaults.headers.common['content-type'] = 'application/json';
// fetch Contacts
export const fetchContacts = async () => {
  const resp = await axios.get('/contacts');
  return resp.data;
};
// add Contact
export const addContact = async contact => {
  const resp = await axios.post('/contacts', contact);
  return resp.data;
};
// delete Contact
export const deleteContact = async id => {
  const resp = await axios.delete(`/contacts/${id}`);
  return resp.data;
};
