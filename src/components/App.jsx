import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = contact => {
    if (
      this.state.contacts.some(
        c => c.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    this.setState({ contacts: [finalContact, ...this.state.contacts] });
  };

  filterContacts = filterValue => {
    this.setState({ filter: filterValue });
  };

  onDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
      // filter: this.state.filter.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />

        <h2>Contacts</h2>
        <Filter filterContacts={this.filterContacts} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//     // style={{
//     //   height: '100vh',
//     //   display: 'flex',
//     //   justifyContent: 'center',
//     //   alignItems: 'center',
//     //   fontSize: 40,
//     //   color: '#010101'
//     // }}
//     >
//       React homework template
//     </div>
//   );
// };

export default App;
