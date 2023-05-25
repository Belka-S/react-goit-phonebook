import { useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/seletors';
import { List } from './ContactList.styled';
import * as contactsAPI from 'redux/contactsAPI';
import { OvalLoader } from 'components/Loader/OvalLoader';

export const ContactList = () => {
  const filterValue = useSelector(selectFilterValue);
  const { data: contacts } = contactsAPI.useGetContactsQuery();
  const [deleteContact, result] = contactsAPI.useDeleteContactMutation();

  const handleDeleteContact = async id => {
    try {
      await deleteContact(id);
    } catch (error) {
      alert(error.message);
    }
  };

  const filtredContacts = contacts?.filter(el =>
    el.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <List>
      {filtredContacts?.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
      {result.isLoading && <OvalLoader />}
    </List>
  );
};
