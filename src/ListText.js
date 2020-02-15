import React, { Component } from "react";
import Text from "./Text";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

class ListText extends Component {
  render() {
    return (
      <div>
        {this.props.name && this.props.name}
        <Text name={this.props.name} />
      </div>
    );
  }
}

export default ListText;


// react => lib thu vien khong phai framework nhu angular vue

// REDUX
