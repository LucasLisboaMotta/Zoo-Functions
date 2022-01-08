const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const listaGeral = {};
    species.forEach((valorAtual) => {
      listaGeral[valorAtual.name] = valorAtual.residents.length;
    });
    return listaGeral;
  }

  const animais = species.find((atual) => atual.name === animal.specie);

  if (!animal.sex) return animais.residents.length;
  return animais.residents.filter((atual) => atual.sex === animal.sex).length;
}

module.exports = countAnimals;
