import React, { Component } from "react";
import Text from "./Text";
import axios from "axios";
import ListText from "./ListText";

// class component // statefull component thao tac du lieu phuc tap
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      errorData: "",
      isLoading: false,
      isTrue: true,
      name: "le hoang dai",
      listName: [
        {
          name: "dai",
          id: 1
        },
        {
          name: "hieu",
          id: 2
        },
        {
          name: "yen",
          id: 3
        }
      ]
    };
  }

  // life cicle chi dung duoc trong class component !!!!!
  componentDidMount() {
    // http request method get post patch delete
    // promise
    // https://jsonplaceholder.typicode.com/users => api duoc viet qua backend bang php, java, nodejs, python,...
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then(res => {
    //     console.log(res);
    //     this.setState({
    //       data: res.data,
    //       isLoading: false
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     this.setState({
    //       errorData: "da co loi",
    //       isLoading: false
    //     });
    //   }); // doi cho den khi axios/ request tra ve du lieu thi lam gi do
  }
  renderText1 = () => {
    if (this.state.isLoading) {
      return <div>Loading .....</div>;
    } else {
      return this.state.data.map((e, i) => {
        return <Text name={e.title} key={e.id}></Text>;
        // name là props
      });
    }
  };

  renderText = () => {
    if (this.state.isTrue) {
      return <div>{this.state.name}</div>; // jsx
    } else {
      return <div>sai</div>;
    }
  };

  handleClick = () => {
    console.log("aaaa");
    this.setState({ name: "le trung hieu" });
  };

  render() {
    return (
      <div>
        {this.renderText()}
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          click here
        </button>
        {//  map chi dung voi array / voi i là index, e dai dien cho tung phan tu trong mang duoc loop qua/ phai return
        this.renderText1()}
        <div>{this.state.errorData !== "" && this.state.errorData}</div>

        <ListText name={this.state.name} />
      </div>
    );
  }
}

export default Header;
