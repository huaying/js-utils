function concat(arr, ...args) {
  const res = [...arr];

  args.forEach((item) => {
    if (Array.isArray(item)) {
      res.push(...item);
    } else {
      res.push(item);
    }
  });
  return res;
}

module.exports = concat;
