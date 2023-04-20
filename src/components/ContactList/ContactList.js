import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { List } from './ContactList.styled';

export const ContactList = ({
  title,
  contacts,
  filterValue,
  handleSearch,
  handleDelete,
}) => (
  <Section title={title}>
    <Filter
      filterValue={filterValue}
      handleSearch={handleSearch}
      handleDelete={handleDelete}
    />
    <br />
    <List>
      {contacts.map(
        contact =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase()) && (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => handleDelete(contact)}>Delete</button>
            </li>
          )
      )}
    </List>
  </Section>
);

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filterValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
