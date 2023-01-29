function clone(target) {
  // typeof null = object
  if (typeof target === "object" && target !== null) {
    if (Array.isArray(target)) {
      return [...target];
    }
    return { ...target };
  }
  return target;
}

module.exports = clone;
