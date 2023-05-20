import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/seletors';
import { deleteContact } from 'redux/actions';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  const filtredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <List>
      {filtredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact))}>
            Delete
          </button>
        </li>
      ))}
    </List>
  );
};
