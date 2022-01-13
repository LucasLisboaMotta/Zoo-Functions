const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some(({ managers }) => managers.includes(id));

const getRelatedEmployees = (id) => {
  if (!isManager(id)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');

  return employees.reduce((acc, { managers, firstName, lastName }) => {
    if (managers.includes(id)) acc.push(`${firstName} ${lastName}`);
    return acc;
  }, []);
};

module.exports = { isManager, getRelatedEmployees };
