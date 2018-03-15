var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

const connect = (...stores) => Component => {
  class Storeful extends React.PureComponent {
    constructor(...args) {
      var _temp;

      return _temp = super(...args), this.state = stores.reduce((acc, { data }) => {
        return _extends({}, acc, data);
      }, {}), this.createListener = store => {
        store.addListener(store.id, this.rerender, store.id);
      }, this.removeListener = store => {
        store.removeListener(store.id, this.rerender);
      }, this.rerender = id => {
        const changedStore = stores.find(st => st.id === id);
        this.setState(_extends({}, changedStore.data));
      }, _temp;
    }

    componentWillMount() {
      stores.forEach(store => this.createListener(store));
    }
    componentWillUnmount() {
      stores.forEach(store => this.removeListener(store));
    }

    render() {
      return React.createElement(Component, this.state);
    }
  }
  return Storeful;
};

export default connect;