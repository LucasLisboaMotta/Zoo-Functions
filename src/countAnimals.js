const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const listaGeral = {};
    data.species.forEach((valorAtual) => {
      listaGeral[valorAtual.name] = valorAtual.residents.length;
    });
    return listaGeral;
  }

  if (!animal.sex) {
    const animais = data.species.find((atual) => atual.name === animal.specie);
    return animais.residents.length;
  }

  const animais = data.species.find((atual) => atual.name === animal.specie);
  return animais.residents.filter((atual) => atual.sex === animal.sex).length;
}

module.exports = countAnimals;
