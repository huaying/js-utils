function debounce(callback, wait) {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback.call(this, ...args);
      timer = null;
    }, wait);
  };
}

module.exports = debounce;
