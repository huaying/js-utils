function instanceOf(instance, constructor) {
  let prototype = constructor.prototype;
  let proto = instance.__proto__;

  while (proto) {
    if (prototype === proto) {
      return true;
    }

    proto = proto.__proto__;
  }
  return false;
}

module.exports = instanceOf;
