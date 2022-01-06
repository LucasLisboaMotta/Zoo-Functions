const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animalList = data.employees.find((actual) => actual.id === id);
  const firstAnimal = data.species.find((find) => find.id === animalList.responsibleFor[0]);
  firstAnimal.residents.sort((a, b) => b.age - a.age);
  return Object.values(firstAnimal.residents[0]);
}

module.exports = getOldestFromFirstSpecies;
