// import React from "react";

// //functional compoennt === stateless component => chay nhanh, de hien thi du lieu
// //dung state trong functional component thi dung react hooks => tat ca component la function component => nang cao
// function Text(props) {
//   return (
//     // no la JSX class => className
//     <div className="name">{props.name}</div>
//   );
// }

// export default Text;

import React, { Component } from "react";

export class Text extends Component {
  render() {
    // console.log(this.props);

    return <div>{this.props.name}</div>;
  }
}

export default Text;
