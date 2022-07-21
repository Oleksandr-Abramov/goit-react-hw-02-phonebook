import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={value} name="filter" onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
