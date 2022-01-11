const { employees } = require('../data/zoo_data');

const getEmployeeByName = (nome) => {
  const quem = employees.find(({ firstName, lastName }) => firstName === nome || lastName === nome);
  if (quem) return quem;
  return {};
};

module.exports = getEmployeeByName;
