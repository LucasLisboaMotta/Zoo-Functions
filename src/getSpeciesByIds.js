const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((atual) => species.find(({ id }) => id === atual));

module.exports = getSpeciesByIds;
