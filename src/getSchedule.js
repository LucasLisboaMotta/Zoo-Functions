const { species, hours } = require('../data/zoo_data');

const dias = Object.keys(hours);
const animais = species.map(({ name }) => name);

const calendario = (dia) => {
  if (!hours[dia].open) {
    return ({ [dia]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } });
  } return { [dia]: {
    officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
    exhibition: species.reduce((acc, { name, availability }) => {
      if (availability.includes(dia)) acc.push(name);
      return acc;
    }, []),
  } };
};

const getSchedule = (target) => {
  if (animais.includes(target)) return species.find(({ name }) => name === target).availability;
  if (dias.includes(target)) return calendario(target);
  return dias.map((dia) => calendario(dia));
};

module.exports = getSchedule;
