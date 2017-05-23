export const getRates = (date, callback) => {
  const baseUrl = `http://api.fixer.io/${date}?base=USD`;

  fetch(baseUrl).then(res => res.json()).then(res => callback(res));
};
