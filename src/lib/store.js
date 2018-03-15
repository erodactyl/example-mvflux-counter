var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import EventEmitter from "./event_emitter";
const random = () => Math.random().toString();

export default class Store extends EventEmitter {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.id = random(), this.setData = change => {
      const newData = this._getNewData(change);
      this.data = _extends({}, this.data, newData);
      this.emit(this.id);
    }, this._getNewData = change => {
      switch (typeof change) {
        case "function":
          return change(this.data);
        default:
          return change;
      }
    }, _temp;
  }

}