const chunk = require("./array/chunk");
const concat = require("./array/concat");
const difference = require("./array/difference");
const every = require("./array/every");
const filter = require("./array/filter");
const find = require("./array/find");
const findIndex = require("./array/findIndex");
const flatten = require("./array/flatten");
const map = require("./array/map");
const reduce = require("./array/reduce");
const slice = require("./array/slice");
const some = require("./array/some");
const unique = require("./array/unique");

const apply = require("./func/apply");
const bind = require("./func/bind");
const call = require("./func/call");
const debounce = require("./func/debounce");
const throttle = require("./func/throttle");

const clone = require("./object/clone");
const deepClone = require("./object/deepClone");
const instanceOf = require("./object/instanceOf");
const mergeObject = require("./object/mergeObject");
const newInstance = require("./object/newInstance");

const eventBus = require("./event/eventBus");
const pubSub = require("./event/pubSub");

module.exports = {
  chunk,
  concat,
  difference,
  every,
  filter,
  find,
  findIndex,
  flatten,
  map,
  reduce,
  slice,
  some,
  unique,
  apply,
  bind,
  call,
  debounce,
  throttle,
  clone,
  deepClone,
  instanceOf,
  mergeObject,
  newInstance,
  eventBus,
  pubSub,
};
