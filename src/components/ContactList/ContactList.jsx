import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/seletors';
// import { deleteContact } from 'redux/contactsSlice';
import { List } from './ContactList.styled';
import { fetchContacts, deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <List>
      {filtredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </List>
  );
};
