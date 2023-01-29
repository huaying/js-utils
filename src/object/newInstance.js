// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

function newInstance(constructor, ...args) {
  const obj = {};

  const result = constructor.call(obj, ...args);

  obj.__proto__ = constructor.__proto__;

  return result instanceof Object ? result : obj;
}

module.exports = newInstance;
