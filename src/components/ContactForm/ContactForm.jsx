import { Component } from 'react';

class ContactForm extends Component {
  state = {
    // contacts: [],
    name: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    // const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    // this.state.title
    // this.state["title"]
  };

  handleSubmit = e => {
    e.preventDefault();

    // const contact = {
    //   name:
    // }

    // this.setState({ name: e.target.value });

    const contact = {
      name: this.state.name,
    };

    this.props.onAddContact(contact);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
