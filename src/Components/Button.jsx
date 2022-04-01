import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { label, onClick, disabled } = this.props;
    return (
      <button
        type="submit"
        onClick={ onClick }
        disabled={ disabled }
      >
        { label }

      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
