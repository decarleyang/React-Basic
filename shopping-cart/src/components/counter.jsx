import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, PrevState) {
    console.log("prevProps", prevProps);
    console.log("PrevState", PrevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <span className={this.GetBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 20 }}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm-m2"
        >
          Delete
        </button>
      </div>
    );
  }

  //use the let instead of const because it's being monified
  GetBadgeClasses() {
    let classes = "badge-number badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
