const data = require('../data/zoo_data');

const animalDay = (target) => {
  const animalReturn = data.species.reduce((acc, actual) => {
    if (actual.availability.includes(target)) acc.push(actual.name);
    return acc;
  }, []);
  return animalReturn;
};

const weekCalendar = (week, targ) => {
  const day = {};
  const closed = week.reduce((acc, actual) => {
    if (data.hours[actual].open === 0 && data.hours[actual].close === 0) acc.push(actual);
    return acc;
  }, []);
  if (closed.includes(targ)) {
    day[targ] = {};
    day[targ].officeHour = 'CLOSED';
    day[targ].exhibition = 'The zoo will be closed!';
    return day;
  }
  day[targ] = {};
  day[targ].officeHour = `Open from ${data.hours[targ].open}am until ${data.hours[targ].close}pm`;
  day[targ].exhibition = animalDay(targ);
  return day;
};

const calendar = (week) => {
  const finalCalendar = week.reduce((acc, actual) => {
    Object.assign(acc, weekCalendar(week, actual));
    return acc;
  }, {});
  return finalCalendar;
};

const animalCalendar = (target) => {
  const animalReturn = data.species.find((actual) => actual.name === target);
  return animalReturn.availability;
};

const getSchedule = (scheduleTarget) => {
  const week = Object.keys(data.hours);
  const animal = data.species.reduce((acc, actual) => {
    acc.push(actual.name);
    return acc;
  }, []);
  if (week.includes(scheduleTarget)) return weekCalendar(week, scheduleTarget);
  if (animal.includes(scheduleTarget)) return animalCalendar(scheduleTarget);
  return calendar(week);
};

module.exports = getSchedule;
