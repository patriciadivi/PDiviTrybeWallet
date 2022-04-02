import React from 'react';
import {
  string,
} from 'prop-types';
import { connect } from 'react-redux';
import { thunkFetchCurrencies } from '../actions/actionWallet';
import '../Styles/Wallter.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(thunkFetchCurrencies());
  }

  render() {
    const { email } = this.props;
    return (
      <section className="Wallter">
        <header>
          <nav>
            <select>
              <option data-testid="header-currency-field">BRL</option>
            </select>
            <p data-testid="total-field">0</p>
            <p data-testid="email-field">{ email }</p>
          </nav>
          <h2>TrybeWallet</h2>
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
