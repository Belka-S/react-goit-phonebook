import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { OvalLoader } from 'components/Loader/OvalLoader';

import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectError, selectIsLoading } from 'redux/seletors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
      <Section mainTitle={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter /> <br />
        <ContactList />
      </Section>
      {isLoading && <OvalLoader />}
    </>
  );
};
