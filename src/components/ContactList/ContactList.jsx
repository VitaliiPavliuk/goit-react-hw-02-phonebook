import { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact, i) => {
          return <li key={i}>{contact.name}</li>;
        })}
      </ul>
    );
  }
}

export default ContactList;
