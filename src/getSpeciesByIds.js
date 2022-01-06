const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((acumulado, atual) => {
    acumulado.push(data.species.find((atualFind) => atualFind.id === atual));
    return acumulado;
  }, []);
}

module.exports = getSpeciesByIds;
