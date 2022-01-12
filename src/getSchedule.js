const { species, hours } = require('../data/zoo_data');

const dias = Object.keys(hours);
const animais = species.map(({ name }) => name);

const calendario = (dia) => {
  if (!hours[dia].open) {
    return ({ officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' });
  } return {
    officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
    exhibition: species.reduce((acc, { name, availability }) => {
      if (availability.includes(dia)) acc.push(name);
      return acc;
    }, []),
  };
};

const getSchedule = (target) => {
  if (animais.includes(target)) return species.find(({ name }) => name === target).availability;
  if (dias.includes(target)) return ({ [target]: calendario(target) });
  return dias.reduce((acc, dia) => {
    acc[dia] = calendario(dia);
    return acc;
  }, {});
};

console.log(getSchedule());

module.exports = getSchedule;
