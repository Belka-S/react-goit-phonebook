import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

import { Section } from 'components/Section/Section';
import { Form, Field, Label } from 'components/ContactForm/ContactForm.styled';

export const ContactForm = ({ handleSubmit, title }) => (
  <Section mainTitle={title}>
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) =>
        handleSubmit({ ...values, id: nanoid() }, actions.resetForm())
      }
    >
      <Form>
        <Label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
        </Label>
        <Label>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
        </Label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  </Section>
);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
