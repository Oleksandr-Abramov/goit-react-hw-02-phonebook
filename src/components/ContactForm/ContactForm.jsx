import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  };

  state = {
    name: '',
    number: '',
  };

  handleChangeForm = evt => {
    const { value, name } = evt.target;
    this.setState({ [name]: value });
  };

  handleOnSubmitForm = evt => {
    evt.preventDefault();

    this.props.contacts.find(
      ({ name }) => name.toLowerCase() === this.state.name.toLowerCase()
    )
      ? alert(`${this.state.name} is already in contacts.`)
      : this.sendContacts();
  };

  sendContacts = () => {
    const { name, number } = this.state;
    const dataForm = {
      name,
      number,
      id: nanoid(),
    };
    this.props.onSubmit(dataForm);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleOnSubmitForm}>
        <div>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChangeForm}
            />
          </label>
        </div>
        <div>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChangeForm}
            />
          </label>
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
