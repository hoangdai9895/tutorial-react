import React, { Component } from "react";

class About extends Component {
  // clik vao nut Click vao day thi lay data tu traeng "https://jsonplaceholder.typicode.com/todos" inra 1 list viec phai lam

  // có thể hiện hiệu ứng loading là chữ "Loading...." khi chưa có data trả về

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">Simple todo list using React</p>
          <hr className="my-4" />

          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              CLick vào đây
            </a>
          </p>
        </div>

        <ul className="list-group">
          <li className="list-group-item">Cras justo odio </li>
        </ul>
      </div>
    );
  }
}

export default About;
