const data = require('../data/zoo_data');

const employees = (id) => {
  const person = data.employees.find((find) => find.id === id);
  const fullName = `${person.firstName} ${person.lastName}`;
  const species = person.responsibleFor.reduce((acc, actual) => {
    const animal = data.species.find((find) => find.id === actual);
    acc.push(animal.name);
    return acc;
  }, []);
  const locations = species.reduce((acc, actual) => {
    const location = data.species.find((find) => find.name === actual);
    acc.push(location.location);
    return acc;
  }, []);
  return {
    id,
    fullName,
    species,
    locations,
  };
};

const allEmployees = () => {
  const all = data.employees.reduce((acc, actual) => {
    acc.push(actual.id);
    return acc;
  }, []);
  return all.reduce((acc, actual) => {
    acc.push(employees(actual));
    return acc;
  }, []);
};

const objectId = (id) => {
  const finalObject = { id: 'none', ok: false };
  if (data.employees.find((find) => find.id === id.id)) {
    finalObject.id = id.id;
    finalObject.ok = true;
  }
  if (data.employees.find((find) => find.firstName === id.name)) {
    const firstName = data.employees.find((find) => find.firstName === id.name);
    finalObject.id = firstName.id;
    finalObject.ok = true;
  }
  if (data.employees.find((find) => find.lastName === id.name)) {
    const lastName = data.employees.find((find) => find.lastName === id.name);
    finalObject.id = lastName.id;
    finalObject.ok = true;
  }
  return finalObject;
};

function getEmployeesCoverage(id) {
  if (!id) return allEmployees();
  if (data.employees.find((find) => find.id === id)) return employees(id);
  const trueID = objectId(id);
  if (trueID.ok) return employees(trueID.id);
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
