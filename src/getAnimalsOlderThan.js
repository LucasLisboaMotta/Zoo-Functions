const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = data.species.find((atual) => animal === atual.name);
  return especie.residents.every((atual) => atual.age >= age);
}

module.exports = getAnimalsOlderThan;
