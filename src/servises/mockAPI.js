import axios from 'axios';

axios.defaults.baseURL = 'https://6469c172183682d61445c3b7.mockapi.io';
axios.defaults.headers.common['content-type'] = 'application/json';

export const fetchContacts = async () => {
  const resp = await axios.get('/contacts');
  const data = resp.data;
  return data;
};
