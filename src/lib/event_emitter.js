const isFunc = allegedFunc => typeof allegedFunc === "function";

export default class EventEmitter {
  constructor() {
    this.listeners = {};

    this.addListener = (name, callback, ...args) => {
      if (!isFunc(callback)) {
        throw new Error("Listener callback must be a function");
      }
      if (args === undefined) {
        args = [];
      }
      if (this.listeners[name] === undefined) {
        this.listeners[name] = [];
      }
      this.listeners[name].push({ callback, args });
    };

    this.emit = name => {
      if (this.listeners[name] !== undefined) {
        this.listeners[name].forEach(({ callback, args }) => callback(...args));
      }
    };

    this.getListeners = name => {
      return this.listeners[name];
    };

    this.removeListener = (name, _callback) => {
      if (!isFunc(_callback)) {
        throw new Error("Listener callback must be a function");
      }
      if (this.listeners[name] !== undefined) {
        this.listeners[name] = this.listenesr[name].filter(({ callback }) => callback !== _callback);
      }
    };
  }

}