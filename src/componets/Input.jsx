import React, { Component } from 'react';

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

export default Input;
