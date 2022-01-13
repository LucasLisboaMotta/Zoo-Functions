const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((current) => species.find(({ id }) => id === current));

module.exports = getSpeciesByIds;
