import React, { Component } from "react";
class AddNums extends Component {
  render() {
    const n1 = parseInt(this.props.n1);
    const n2 = parseInt(this.props.n2);
    const sum = n1 + n2;
    return <p>{sum}</p>;
  }
}
export default AddNums;