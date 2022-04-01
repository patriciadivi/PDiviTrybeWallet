import React from 'react';
import {
  string,
} from 'prop-types';
import { connect } from 'react-redux';
// import user from '../reducers/user';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <section>
        <header>
          <h2>TrybeWallet</h2>
          <nav>
            <p data-testid="email-field">{ email }</p>
            <p data-testid="total-field">0</p>
            <select>
              <option data-testid="header-currency-field">BRL</option>
            </select>
          </nav>
        </header>
      </section>
    );
  }
}

Wallet.propTypes = {
  email: string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
