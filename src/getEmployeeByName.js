const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const nome = data.employees.find((atual) => atual.firstName === employeeName);
  const sobrenome = data.employees.find((atual) => atual.lastName === employeeName);
  if (nome) return nome;
  if (sobrenome) return sobrenome;
  return {};
}

module.exports = getEmployeeByName;
