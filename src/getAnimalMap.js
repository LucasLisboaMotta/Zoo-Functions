const { species } = require('../data/zoo_data');

let parametro;

const includeNames = (animal, residents, options) => residents.reduce((acc, { name, sex }) => {
  if (options.sex) {
    if (options.sex === sex) {
      acc[animal].push(name);
    }
  } else {
    acc[animal].push(name);
  } if (options.sorted) acc[animal].sort();
  return acc;
}, { [animal]: [] });

const getAnimalMap = (options) => species.reduce((acc, { location }) => {
  if (!acc.includes(location)) acc.push(location);
  parametro = (!options || !options.includeNames);
  return acc;
}, []).reduce((acc, local) => {
  acc[local] = species.reduce((acc2, { location, name, residents }) => {
    if (location === local) {
      if (parametro) {
        acc2.push(name);
        return acc2;
      } acc2.push(includeNames(name, residents, options));
      return acc2;
    } return acc2;
  }, []); return acc;
}, {});

module.exports = getAnimalMap;
