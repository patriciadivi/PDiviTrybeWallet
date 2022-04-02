const fetchCurrencies = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export default fetchCurrencies;
