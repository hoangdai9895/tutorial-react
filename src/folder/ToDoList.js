import React, { Component } from "react";

class ToDoList extends Component {
  state = {
    list: [
      {
        id: 1,
        name: "viec thu 1"
      }
    ],
    todo: null,
    isOpen: false,
    updateTodo: {},
    updateId: null
  };

  add = () => {
    // new todo
    let todo = {
      id: Date.now(), // uuid
      name: this.state.todo
    };
    // tao 1 bien tam thoi bang listodo
    let todoList = this.state.list;
    // them todo vao list
    todoList = [...todoList, todo];
    // cap nhat state
    this.setState({ list: todoList });
    // set local
    this.setLocalStorage(todoList);
  };

  onChange = e => {
    this.setState({ todo: e.target.value });
  };

  openModal = id => {
    this.setState({ isOpen: !this.state.isOpen, updateId: id });
    let updateTodo = this.state.list.filter(e => e.id === id);
    this.setState({ updateTodo: updateTodo[0] });
  };

  update = () => {
    let list = this.state.list;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === this.state.updateId) {
        list[i].name = this.state.todo;
      }
    }
    this.setState({ list: list });
    this.setLocalStorage(list);
  };

  setLocalStorage = data => {
    localStorage.setItem("todolist", JSON.stringify(data));
  };

  remove = id => {
    let tempList = this.state.list;
    tempList = tempList.filter(e => e.id !== id);
    this.setState({ list: tempList });
    this.setLocalStorage(tempList);
  };

  componentDidMount() {
    if (localStorage.getItem("todolist") !== null) {
      let data = JSON.parse(localStorage.getItem("todolist"));
      this.setState({ list: data });
    } else {
      //
      localStorage.setItem("todolist", JSON.stringify(this.state.list));
    }
  }

  render() {
    const { list, updateTodo } = this.state;
    return (
      <div className="jumbotron">
        <h1 className="display-4">Simple to do list using react js</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <div className="d-flex">
          <div className="form-group mr-3">
            <input
              type="text"
              className="form-control"
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="box">
            <button className="btn btn-primary mr-2" onClick={() => this.add()}>
              Add
            </button>
          </div>
          {this.state.isOpen ? (
            <>
              <div className="form-group mr-3">
                <input
                  type="text"
                  className="form-control"
                  onChange={e => this.onChange(e)}
                  defaultValue={updateTodo.name}
                />
              </div>
              <div className="box">
                <button
                  className="btn btn-success mr-2"
                  onClick={() => this.update()}
                >
                  ok
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => this.openModal()}
                >
                  close
                </button>
              </div>
            </>
          ) : null}
        </div>
        <ul className="list-group">
          {list.map((e, i) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={i}
            >
              <div>{e.name}</div>
              <div className="btn btn-danger" onClick={() => this.remove(e.id)}>
                Remove
              </div>
              {!this.state.isOpen ? (
                <div
                  className="btn btn-info"
                  onClick={() => this.openModal(e.id)}
                >
                  Update
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
