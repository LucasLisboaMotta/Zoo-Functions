const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) return species.reduce((acumulador, { name, residents }) => ({...acumulador, [name]: residents.length}), {});
  const animais = species.find((atual) => atual.name === animal.specie);

  if (!animal.sex) return animais.residents.length;
  return animais.residents.filter((atual) => atual.sex === animal.sex).length;
};

module.exports = countAnimals;
