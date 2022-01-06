const data = require('../data/zoo_data');

const keyReduce = (acc, actual) => {
  if (!acc.includes(actual.location)) acc.push(actual.location);
  return acc;
};

const locationAnimal = () => {
  const location = data.species.reduce(keyReduce, []);
  const object = {};
  location.forEach((actual) => {
    object[actual] = data.species.reduce((acc, actual2) => {
      if (actual2.location === actual) acc.push(actual2.name);
      return acc;
    }, []);
  });
  return object;
};

const sorted = (object) => {
  const keys = Object.keys(object);
  keys.forEach((actualKeys) => {
    object[actualKeys].forEach((animalKey) => {
      const keys2 = Object.keys(animalKey);
      animalKey[keys2].sort();
    });
  });
  return object;
};

const sexLint = (actual2, options) => {
  const sexReturn = actual2.residents.reduce((acc2, actualRedu) => {
    if (actualRedu.sex === options.sex) acc2[actual2.name].push(actualRedu.name);
    return acc2;
  }, { [actual2.name]: [] });
  return sexReturn;
};

const sexAnimal = (options) => {
  const location = data.species.reduce(keyReduce, []);
  const object = {};
  location.forEach((actual) => {
    object[actual] = data.species.reduce((acc, actual2) => {
      if (actual2.location === actual) {
        const actualReduce = sexLint(actual2, options);
        acc.push(actualReduce);
      }
      return acc;
    }, []);
  });
  return object;
};

const includeNames = () => {
  const location = data.species.reduce(keyReduce, []);
  const object = {};
  location.forEach((actual) => {
    object[actual] = data.species.reduce((acc, actual2) => {
      if (actual2.location === actual) {
        const actualReduce = actual2.residents.reduce((acc2, actualReduc) => {
          acc2[actual2.name].push(actualReduc.name);
          return acc2;
        }, { [actual2.name]: [] });
        acc.push(actualReduce);
      }
      return acc;
    }, []);
  });
  return object;
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return locationAnimal();
  let object = includeNames();
  if (options.sex) object = sexAnimal(options);
  if (options.sorted) object = sorted(object);
  return object;
}
module.exports = getAnimalMap;
