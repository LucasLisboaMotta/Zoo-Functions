const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return species
      .reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  }
  const animals = species.find(({ name }) => name === animal.specie).residents;

  if (!animal.sex) return animals.length;
  return animals.filter(({ sex }) => sex === animal.sex).length;
};

module.exports = countAnimals;
