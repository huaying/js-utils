// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// fun.call(thisArg[, arg1[, arg2[, ...]]])

function call(fn, obj, ...args) {
  if (obj === undefined || obj === null) {
    obj = globalThis;
  }

  obj.__fn = fn;

  const result = obj.__fn(...args);

  delete obj.__fn;

  return result;
}

module.exports = call;
