import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, label, onChange,
      value, id, dataTestid } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <input
          data-testid={ dataTestid }
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          id={ id }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  dataTestid: PropTypes.string,

};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  id: '',
  dataTestid: '',
  onChange: null,
};

export default Input;
