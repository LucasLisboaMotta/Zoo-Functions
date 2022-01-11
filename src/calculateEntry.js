const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const clientes = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    if (age < 18) clientes.child += 1;
    if (age >= 18 && age < 50) clientes.adult += 1;
    if (age >= 50) clientes.senior += 1;
  });
  return clientes;
};

const calculateEntry = (entrants) => {
  if (!entrants || !Object.keys(entrants).length) return 0;

  const clientes = countEntrants(entrants);
  const keys = Object.keys(clientes);
  return keys.reduce((acumulador, chave) => acumulador + (clientes[chave] * prices[chave]), 0);
};

module.exports = { calculateEntry, countEntrants };
