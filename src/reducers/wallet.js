// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_CURRENCIES_API, FETCH_EXPENSE_API } from '../actions/actionWallet';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES_API:
    return {
      ...state,
      currencies: action.currencies,
    };
  case FETCH_EXPENSE_API:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
      total: (+state.total + +action.totalCalculation),
    };
  default:
    return state;
  }
};

export default wallet;
