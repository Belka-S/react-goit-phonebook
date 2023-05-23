import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterValue } from 'redux/seletors';
import * as operations from 'redux/operations';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilterValue);

  useEffect(() => {
    dispatch(operations.fetchContactsOperation());
  }, [dispatch]);

  const filtredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <List>
      {filtredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            onClick={() =>
              dispatch(operations.deleteContactOperation(contact.id))
            }
          >
            Delete
          </button>
        </li>
      ))}
    </List>
  );
};
