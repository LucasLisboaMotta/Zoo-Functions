const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, minimumAge) => species
  .find(({ name }) => animal === name).residents
  .every(({ age }) => age >= minimumAge);

module.exports = getAnimalsOlderThan;
