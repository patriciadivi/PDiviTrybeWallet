import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  reder() {
    const {
      valueInputID,
      valeuInputName,
      valeuInputText,
      valeuPlaceholder,
      valeuDataTestid,
    } = this.props;
    return (
      <section>
        <label htmlFor="input">
          <input
            id={ valueInputID }
            name={ valeuInputName }
            type={ valeuInputText }
            placeholder={ valeuPlaceholder }
            data-testid={ valeuDataTestid }
          />
        </label>
      </section>
    );
  }
}

Input.propTypes = {
  valueInputID: PropTypes.string,
  valeuInputName: PropTypes.string,
  valeuInputText: PropTypes.string,
  valeuPlaceholder: PropTypes.string,
  valeuDataTestid: PropTypes.string,
}.isRequisit;

export default Input;
