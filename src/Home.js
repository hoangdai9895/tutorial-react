import React, { Component } from "react";

class Home extends Component {
  // de bai
  // trong trang home ve html ra 2 div (div1, div2) hien tai thi thi div1 hiển thị còn div2 thì không
  // tren 2 div nay là 1 cái nút nhưng thì div1 đang hiển thị thì cái nút sẽ có nội dung là "hiển thị div2", khi click vào div 2 thì div 2 hiển thị còn div 1 thì biến mất đồng thời nội dung của nút =>  "hiển thị div1"
  // chi chu dung state, props
  render() {
    return (
      <div className="container">
        <button type="button" class="btn btn-primary">
          Hiển thị div 2
        </button>
        <div className="row">
          <div className="col-lg-6">
            <div class="alert alert-primary" role="alert">
              div 1
            </div>
          </div>
          <div className="col-lg-6">
            <div class="alert alert-primary" role="alert">
              div 2
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
