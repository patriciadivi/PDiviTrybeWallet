import React from 'react';
import {
  string, arrayOf, func, number, shape, oneOfType,
} from 'prop-types';
import { connect } from 'react-redux';
import { thunkFetchCurrencies, thunkAddExpense } from '../actions/actionWallet';
import Input from '../Components/Input';
import Button from '../Components/Button';
import '../Styles/Wallter.css';

const INITIAL_STATE = {
  id: 0,
  value: '0',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(thunkFetchCurrencies());
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(thunkAddExpense(this.state));
    this.setState((prev) => ({ ...INITIAL_STATE, id: prev.id + 1 }));
  };

  render() {
    // State do componente Wallet
    const { value, description, currency,
      method, tag } = this.state;
    const { email, currencies, total, expenses } = this.props;
    console.log(expenses);

    let convertTotal = total.toString();
    const VALUE_MAGIC = 3;
    convertTotal = convertTotal.slice(0, (convertTotal.indexOf('.')) + VALUE_MAGIC);
    return (

      <section className="Wallter">
        <header>
          <nav>
            <select>
              <option data-testid="header-currency-field">BRL</option>
            </select>
            <p data-testid="total-field">{ convertTotal }</p>
            <p data-testid="email-field">{ email }</p>
          </nav>
          <h2>TrybeWallet</h2>
        </header>

        <form>
          <Input
            label="Despesa: "
            dataTestid="value-input"
            type="number"
            onChange={ this.handleChange }
            value={ value }
            name="value"
            id="expenseId"
          />
          <Input
            label="Descrição da despesa: "
            dataTestid="description-input"
            type="text"
            onChange={ this.handleChange }
            value={ description }
            name="description"
            id="description"
          />

          <label htmlFor="currencies">
            Moeda:
            <select
              data-testid="currency-input"
              id="currencies"
              name="currency"
              onChange={ this.handleChange }
              value={ currency }
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
              name="method"
              onChange={ this.handleChange }
              value={ method }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="money">
            Categoria Despesa:
            <select
              data-testid="tag-input"
              id="money"
              name="tag"
              onChange={ this.handleChange }
              value={ tag }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <Button
            type="submit"
            label="Adicionar despesa"
            name="disabledButton"
            onClick={ this.handleClick }
            disabled={ false }
          />
        </form>

        <table name="">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((ele) => (
              <tr key={ ele.id }>
                <td>{ ele.description }</td>
                <td>{ele.tag}</td>
                <td>{ele.method}</td>
                <td>{Number(ele.value).toFixed(2)}</td>
                <td>{(ele.exchangeRates[ele.currency].name)}</td>
                <td>{Number(ele.exchangeRates[ele.currency].ask).toFixed(2)}</td>
                <td>{(ele.value * (+ele.exchangeRates[ele.currency].ask)).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <Button
                    type="button"
                    label="Editar"
                    name="editButton"
                    onClick={ this.handleClick }
                    disabled={ false }
                  />
                </td>
                <td>
                  <Button
                    type="button"
                    label="Excluir"
                    name="deletButton"
                    onClick={ this.handleClick }
                    disabled={ false }
                  />
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

Wallet.propTypes = {
  email: string.isRequired,
  currencies: arrayOf(string).isRequired,
  dispatch: func.isRequired,
  total: number,
  expenses: arrayOf(shape({
    id: number.isRequired,
    description: string.isRequired,
    value: oneOfType([string, number]),
    currency: string.isRequired,
    method: string.isRequired,
    tag: string.isRequired,
  })).isRequired,
  // disabled: bool,
};

Wallet.defaultProps = {
  total: 0,
  // disabled: false,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  total: state.wallet.total,
});

export default connect(mapStateToProps)(Wallet);
