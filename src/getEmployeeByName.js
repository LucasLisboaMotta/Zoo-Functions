const { employees } = require('../data/zoo_data');

const getEmployeeByName = (nome) => {
  const employee = employees
    .find(({ firstName, lastName }) => firstName === nome || lastName === nome);
  return !employee ? {} : employee;
};

module.exports = getEmployeeByName;
