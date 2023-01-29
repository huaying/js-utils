function flatten(arr) {
  let res = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item));
    } else {
      res.push(item);
    }
  });
  return res;
}

module.exports = flatten;
