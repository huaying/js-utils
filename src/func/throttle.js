function throttle(callback, wait) {
  let shouldWait = false;

  return function (...args) {
    if (shouldWait) {
      return;
    }

    callback.call(this, ...args);
    shouldWait = true;
    setTimeout(() => (shouldWait = false), wait);
  };
}

module.exports = throttle;
