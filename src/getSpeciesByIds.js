const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const listaAnimais = [];
  ids.forEach((atual) => {
    const animal = data.species.find((atual2) => atual === atual2.id);
    listaAnimais.push(animal);
  });
  return listaAnimais;
}

module.exports = getSpeciesByIds;
