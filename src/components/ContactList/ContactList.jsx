import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                type="button"
                onClick={() => {
                  this.props.onDeleteContact(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
