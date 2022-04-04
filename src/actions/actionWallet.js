import fetchCurrencies from '../services/fetchCurrencies';

// export const THUNK_FETCH_CURRENCIES_API = 'THUNK_FETCH_CURRENCIES_API';

export const FETCH_EXPENSE_API = 'FETCH_EXPENSE_ API';

export const FETCH_CURRENCIES_API = 'FETCH_CURRENCIES_API';

export const actionfetchCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES_API, // tipo do case switch
  currencies,
});

export const actionThunkAddExpense = (expenses, totalCalculation) => ({
  type: FETCH_EXPENSE_API, // tipo do case switch
  expenses,
  totalCalculation,
});

export const thunkFetchCurrencies = () => async (dispatch) => {
  const resultFetchComplete = await fetchCurrencies();
  delete resultFetchComplete.USDT; // deletou chave que não precisa
  const resulCurrenciesArry = Object.keys(resultFetchComplete);
  dispatch(actionfetchCurrencies(resulCurrenciesArry));
};

export const thunkAddExpense = (stateWallet) => async (dispatch) => {
  const resultFetchComplete = await fetchCurrencies();
  delete resultFetchComplete.USDT; // deletou chave que não precisa
  const stateWalletComplete = { ...stateWallet, exchangeRates: resultFetchComplete };
  // calculo do total
  const expenseValue = stateWalletComplete.value;
  const quotationValue = stateWalletComplete.exchangeRates[stateWalletComplete.currency]
    .ask;
  const totalCalculation = +expenseValue * +quotationValue;
  dispatch(actionThunkAddExpense(stateWalletComplete, totalCalculation));
};
