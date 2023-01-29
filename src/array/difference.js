function difference(arr1, arr2 = []) {
  if (arr1.length === 0) {
    return [];
  }

  if (arr2.length === 0) {
    return arr1.slice();
  }

  const set = new Set(arr2);
  const res = [];

  arr1.forEach((item) => {
    if (!set.has(item)) {
      res.push(item);
    }
  });

  return res;
}

module.exports = difference;
