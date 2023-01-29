function mergeObject(...args) {
  const res = {};

  args.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      if (res.hasOwnProperty(key)) {
        res[key] = [].concat(res[key], obj[key]);
      } else {
        res[key] = obj[key];
      }
    });
  });

  return res;
}

module.exports = mergeObject;
