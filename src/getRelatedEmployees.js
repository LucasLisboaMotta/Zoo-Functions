const data = require('../data/zoo_data');

function isManager(id) {
  let retorno = false;
  data.employees.forEach((valorAtual) => {
    if (valorAtual.managers.find((valor) => valor === id)) retorno = true;
  });
  return retorno;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const colaboradores = data.employees.reduce((acumulado, atual) => {
    if ((atual.managers.find((valor) => valor === managerId))) {
      acumulado.push(`${atual.firstName} ${atual.lastName}`);
    }
    return acumulado;
  }, []);
  return colaboradores;
}

module.exports = { isManager, getRelatedEmployees };
