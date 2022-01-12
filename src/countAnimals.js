const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return species
      .reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  }
  const animais = species.find(({ name }) => name === animal.specie).residents;

  if (!animal.sex) return animais.length;
  return animais.filter(({ sex }) => sex === animal.sex).length;
};

module.exports = countAnimals;
