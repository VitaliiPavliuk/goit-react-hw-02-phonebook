import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onAddContact = contact => {
    const finalContact = {
      id: (Math.random() * 100).toString(),
      ...contact,
    };

    this.setState({ contacts: [finalContact, ...this.state.contacts] });

    // console.log(this.state.contacts);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={this.state.contacts} />
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
