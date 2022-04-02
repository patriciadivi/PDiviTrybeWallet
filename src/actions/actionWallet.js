import fetchCurrencies from '../services/fetchCurrencies';

export const FETCH_CURRENCIES_API = 'FETCH_CURRENCIES_API';

export const actionfetchCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES_API, // tipo do case switch
  currencies,
});

export const thunkFetchCurrencies = () => async (dispatch) => {
  const resultFetchComplete = await fetchCurrencies();
  delete resultFetchComplete.USDT; // deletou chave que não precisa
  const resulCurrenciesArry = Object.keys(resultFetchComplete);
  dispatch(actionfetchCurrencies(resulCurrenciesArry));
};
