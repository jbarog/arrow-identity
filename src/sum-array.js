const identity = require('./identity');

const sumArray = (elements, parseItem = identity) => elements.reduce((prev, el) => {
  const currentValue = parseItem(el);
  return prev + currentValue;
}, 0);

module.exports = sumArray;
