const { employees, species } = require('../data/zoo_data');

let variavelDeControle = 0;
const objetoRetorno = (id, firstName, lastName, responsibleFor, obj = { id: 'vazio' }) => {
  const locations = [];
  const objeto = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((animal) => {
      const { location, name } = species.find((elemento) => elemento.id === animal);
      locations.push(location);
      return name;
    }),
    locations,
  };
  const controle = (obj.id === id || objeto.fullName.includes(obj.name));
  if (obj.id !== 'vazio' && !controle) variavelDeControle += 1;
  return [objeto, controle];
};

const getEmployeesCoverage = (obj) => {
  variavelDeControle = 0;
  const retorno = employees.reduce((acc, { id, firstName, lastName, responsibleFor }) => {
    const objeto = objetoRetorno(id, firstName, lastName, responsibleFor, obj);
    if (!obj) {
      acc.push(objeto[0]);
      return acc;
    }
    if (objeto[1]) return objeto[0];
    return acc;
  }, []);
  if (variavelDeControle !== employees.length) return retorno;
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
