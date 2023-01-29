// function unique(arr) {
//   const set = new Set();
//   const res = [];

//   arr.forEach((item) => {
//     if (!set.has(item)) {
//       res.push(item);
//       set.add(item);
//     }
//   });

//   return res;
// }

function unique(arr) {
  return [...new Set(arr)];
}

module.exports = unique;
