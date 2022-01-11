const { employees, species } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (identificador) => {
  const animalList = employees.find(({ id }) => id === identificador);
  const firstAnimal = species.find(({ id }) => id === animalList.responsibleFor[0]);
  firstAnimal.residents.sort((a, b) => b.age - a.age);
  return Object.values(firstAnimal.residents[0]);
};

module.exports = getOldestFromFirstSpecies;
