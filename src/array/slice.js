function slice(arr, begin, end) {
  if (arr.length === 0) {
    return [];
  }

  begin = begin || 0;
  if (begin >= arr.length) {
    return [];
  }
  if (begin < 0) {
    begin = arr.length + begin - 1;
  }

  end = end || arr.length;
  if (end < 0) {
    end = arr.length + end;
  }
  if (end < begin) {
    end = arr.length;
  }

  const res = [];
  for (let i = begin; i < end; i++) {
    res.push(arr[i]);
  }

  return res;
}

module.exports = slice;
