import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import * as contactsAPI from 'redux/contactsAPI';
import { OvalLoader } from 'components/Loader/OvalLoader';

export const App = () => {
  const { isFetching } = contactsAPI.useGetContactsQuery();

  return (
    <>
      <Section mainTitle={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter /> <br />
        <ContactList />
      </Section>
      {isFetching && <OvalLoader />}
    </>
  );
};
