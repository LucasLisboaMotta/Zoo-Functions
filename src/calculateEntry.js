const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const clientes = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((atual) => {
    if (atual.age < 18) clientes.child += 1;
    if (atual.age >= 18 && atual.age < 50) clientes.adult += 1;
    if (atual.age >= 50) clientes.senior += 1;
  });
  return clientes;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const clientes = countEntrants(entrants);
  let total = 0;
  const keys = Object.keys(clientes);
  keys.forEach((atual) => {
    total += clientes[atual] * data.prices[atual];
  });
  return total;
}

module.exports = { calculateEntry, countEntrants };
