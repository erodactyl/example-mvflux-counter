import React, { PureComponent } from "react";
import { connect } from "mvflux";
import MyCustomStore from "./ExampleStore";

class Example extends PureComponent {
  increment = () => {
    MyCustomStore.increment();
  };
  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick={this.increment}>Button</button>
      </div>
    );
  }
}

export default connect(MyCustomStore)(Example);
