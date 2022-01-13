const { species, hours } = require('../data/zoo_data');

const days = Object.keys(hours);
const animals = species.map(({ name }) => name);

const calendar = (day) => {
  if (!hours[day].open) return ({ officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' });

  return {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species.reduce((acc, { name, availability }) => {
      if (availability.includes(day)) acc.push(name);
      return acc;
    }, []),
  };
};

const getSchedule = (options) => {
  if (animals.includes(options)) return species.find(({ name }) => name === options).availability;
  if (days.includes(options)) return ({ [options]: calendar(options) });
  return days.reduce((acc, day) => {
    acc[day] = calendar(day);
    return acc;
  }, {});
};

console.log(getSchedule());

module.exports = getSchedule;
