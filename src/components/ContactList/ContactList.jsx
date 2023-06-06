import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/seletors';
import { List } from './ContactList.styled';
import * as contactsAPI from 'redux/contactsAPI';

export const ContactList = () => {
  const filterValue = useSelector(selectFilterValue);
  const { data: contacts } = contactsAPI.useGetContactsQuery();
  const [deleteContact] = contactsAPI.useDeleteContactMutation();

  const filtredContacts = contacts?.filter(el =>
    el.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <List>
      {filtredContacts?.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </List>
  );
};
