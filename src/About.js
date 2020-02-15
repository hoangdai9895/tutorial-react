import React, { Component } from "react";
import axios from "axios";
class About extends Component {
  // clik vao nut Click vao day thi lay data tu traeng "https://jsonplaceholder.typicode.com/todos" inra 1 list viec phai lam
  // có thể hiện hiệu ứng loading là chữ "Loading...." khi chưa có data trả về
  state = {
    data: []
  };

  handleOnClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      this.setState({ data: res.data });
    });
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">Simple todo list using React</p>
          <hr className="my-4" />

          <p className="lead">
            <button
              className="btn btn-primary btn-lg"
              href="#"
              role="button"
              onClick={() => this.handleOnClick()}
            >
              CLick vào đây
            </button>
          </p>
        </div>

        <ul className="list-group">
          {/* in data ra day */}
          {this.state.data.map((e, i) => {
            return (
              <li className="list-group-item" key={i}>
                {e.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default About;
