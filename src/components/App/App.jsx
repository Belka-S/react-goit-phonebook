import { Component } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact =>
    this.setState(prevState =>
      !prevState.contacts.some(el => el.name === contact.name)
        ? { contacts: [...prevState.contacts, contact] }
        : alert(`${contact.name} is already in contacts!`)
    );

  findContact = evt => this.setState({ filter: evt.target.value });

  deleteContact = contact =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contact.id),
    }));

  render = () => (
    <>
      <ContactForm title={'Phonebook'} handleSubmit={this.addContact} />

      <ContactList
        title={'Contacts'}
        contacts={this.state.contacts}
        filterValue={this.state.filter}
        handleSearch={this.findContact}
        handleDelete={this.deleteContact}
      />
    </>
  );
}
