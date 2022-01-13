const { species } = require('../data/zoo_data');

const locations = species.reduce((acc, { location }) => {
  if (!acc.includes(location)) acc.push(location);
  return acc;
}, []);

const includeNames = (animalName, residents, options) => residents.reduce((acc, { name, sex }) => {
  if (options.sex === sex) acc[animalName].push(name);
  if (!options.sex) acc[animalName].push(name);
  if (options.sorted) acc[animalName].sort();
  return acc;
}, { [animalName]: [] });

const animals = (place, options = {}) => species.reduce((acc, { location, name, residents }) => {
  if (place === location) {
    if (options.includeNames) acc.push(includeNames(name, residents, options));
    if (!options.includeNames) acc.push(name);
  } return acc;
}, []);

const getAnimalMap = (options) => locations
  .reduce((acc, location) => ({ ...acc, [location]: animals(location, options) }), {});

module.exports = getAnimalMap;
