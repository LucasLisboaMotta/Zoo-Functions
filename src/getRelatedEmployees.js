const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (id) => {
  if (!isManager(id)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');

  return employees.reduce((acumulador, { managers, firstName, lastName }) => {
    if (managers.includes(id)) acumulador.push(`${firstName} ${lastName}`);
    return acumulador;
  }, []);
};

module.exports = { isManager, getRelatedEmployees };
