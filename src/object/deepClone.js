// issue1: can't clone method
// issue2: can't do circular copy
// function deepClone(target) {
//   return JSON.parse(JSON.stringify(target));
// }

function deepClone(target, cache = new Map()) {
  if (typeof target === "object" && target !== null) {
    // add cache to avoid curcular copy
    if (cache.has(target)) {
      return cache.get(target);
    }

    const res = Array.isArray(target) ? [] : {};

    // TODO: for in performance is not as good as forEach and for.
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        res[key] = deepClone(target[key], cache);
      }
    }
    return res;
  }
  return target;
}

module.exports = deepClone;
