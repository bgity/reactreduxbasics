import React, { Component } from "react";
import CounterControl from "../component/CounterControl/CounterControl";
import CounterOutput from "../component/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <CounterOutput counterval={this.state.counter} />
        <CounterControl label="Increment" />
        <CounterControl label="Decrement" />
        <CounterControl label="Add" />
        <CounterControl label="Substract" />
      </div>
    );
  }
}

export default Counter;
