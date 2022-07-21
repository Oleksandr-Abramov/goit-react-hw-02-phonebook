import PropTypes from 'prop-types';

export const ContactList = ({ contactsList, onDelete }) => {
  return (
    <ul>
      {contactsList.map(({ name, number, id }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
