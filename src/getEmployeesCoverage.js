const data = require('../data/zoo_data');

const employeeObject = ({ id, firstName, lastName, responsibleFor }) => {
  const fullName = `${firstName} ${lastName}`;
  const { species, locations } = responsibleFor.reduce((acc, current) => {
    const { name, location } = data.species.find((currentSpecie) => current === currentSpecie.id);
    acc.species.push(name);
    acc.locations.push(location);
    return acc;
  }, { species: [], locations: [] });
  return { id, fullName, species, locations };
};

const getEmployeesCoverage = (options) => {
  if (!options) return data.employees.map((employee) => employeeObject(employee));

  const employee = data.employees.find(({ id, firstName, lastName }) => id === options.id
  || options.name === firstName || options.name === lastName);
  if (employee) return employeeObject(employee);

  throw new Error('Informações inválidas');
};

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
