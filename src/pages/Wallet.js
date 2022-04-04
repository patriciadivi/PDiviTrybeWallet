import React from 'react';
import {
  string, arrayOf,
} from 'prop-types';
import { connect } from 'react-redux';
import { thunkFetchCurrencies } from '../actions/actionWallet';
import Input from '../Components/Input';
import '../Styles/Wallter.css';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expense: '',
      descriptionExpense: '',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(thunkFetchCurrencies());
  }

  render() {
    const { expense, descriptionExpense } = this.state;
    const { email, currencies } = this.props;
    // console.log(currencies);
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

        <form>
          <Input
            label="Despesa: "
            dataTestid="value-input"
            type="text"
            onChange={ this.handleChange }
            value={ expense }
            name="expense"
            id="expenseId"
          />
          <Input
            label="Descrição da despesa: "
            dataTestid="description-input"
            type="text"
            onChange={ this.handleChange }
            value={ descriptionExpense }
            name="descriptionExpense"
            id="descriptionExpenseId"
          />

          <label htmlFor="currencies">
            Moeda:
            <select
              data-testid="currency-input"
              id="currencies"
              name="currencies"
            >
              {currencies.map((ele, index) => (
                <option
                  key={ index }
                  value={ ele }
                  id={ ele }
                >
                  {ele}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="money">
            Método de pagamento:
            <select
              data-testid="method-input"
              id="money"
              name="money"
            >
              <option value="money">Dinheiro</option>
              <option value="creditCard">Cartão de crédito</option>
              <option value="debitCard">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="money">
            Despesa:
            <select
              data-testid="tag-input"
              id="money"
              name="money"
            >
              <option value="food">Alimentação</option>
              <option value="leisure">Lazer</option>
              <option value="work">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="health">Saúde</option>
            </select>
          </label>
        </form>
      </section>
    );
  }
}

Wallet.propTypes = {
  email: string,
  currencies: arrayOf(string),
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Wallet);
