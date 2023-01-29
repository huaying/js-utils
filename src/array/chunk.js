function chunk(arr, size = 1) {
  if (arr.length === 0) {
    return [];
  }

  const res = [];
  let cur = [];

  arr.forEach((item, idx) => {
    cur.push(item);

    if (cur.length === size || idx === arr.length - 1) {
      res.push(cur);
      cur = [];
    }
  });

  return res;
}

module.exports = chunk;
