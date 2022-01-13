const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((acc, { age }) => {
  if (age < 18) acc.child += 1;
  if (age >= 18 && age < 50) acc.adult += 1;
  if (age >= 50) acc.senior += 1;
  return acc;
}, { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (!entrants || !Object.keys(entrants).length) return 0;

  const visitors = countEntrants(entrants);
  const keys = Object.keys(visitors);
  return keys.reduce((acc, key) => acc + (visitors[key] * prices[key]), 0);
};

module.exports = { calculateEntry, countEntrants };
