function reduce(arr, callback, initValue) {
  let res = initValue;

  for (let i = 0; i < arr.length; i++) {
    res = callback(res, arr[i]);
  }

  return res;
}

module.exports = reduce;
