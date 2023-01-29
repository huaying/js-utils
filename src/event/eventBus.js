const eventBus = {
  callbacks: {},
};

eventBus.on = function (type, callback) {
  if (this.callbacks[type]) {
    this.callbacks[type].push(callback);
  } else {
    this.callbacks[type] = [callback];
  }
};

eventBus.emit = function (type, data) {
  if (this.callbacks[type]) {
    this.callbacks[type].forEach((callback) => {
      callback(data);
    });
  }
};

eventBus.off = function (eventName) {
  if (eventName) {
    delete this.callbacks[eventName];
  } else {
    this.callbacks = {};
  }
};

module.exports = eventBus;
