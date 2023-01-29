const PubSub = {
  id: 0,
  callbacks: {},
  lookup: {},
};

PubSub.subscribe = function (topic, callback) {
  const token = `__token__${this.id++}`;

  if (this.callbacks[topic]) {
    this.callbacks[topic][token] = callback;
  } else {
    this.callbacks[topic] = {
      [token]: callback,
    };
  }

  this.lookup[token] = topic;
  return token;
};

PubSub.publish = function (topic, data) {
  if (this.callbacks[topic]) {
    Object.values(this.callbacks[topic]).forEach((callback) => {
      callback(data);
    });
  }
};

PubSub.unsubscribe = function (unsubscribeId) {
  if (unsubscribeId === undefined) {
    this.callbacks = {};
  } else if (typeof unsubscribeId === "string") {
    if (unsubscribeId.startsWith("__token__")) {
      const topic = this.lookup[unsubscribeId];
      if (topic) {
        delete this.callbacks[topic][unsubscribeId];
      }
    } else {
      delete this.callbacks[unsubscribeId];
    }
  }
};

module.exports = PubSub;
