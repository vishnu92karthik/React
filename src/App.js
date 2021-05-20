


import React from "react";
//import ClickCounter from "./ClickCounter";
//import HoverCounter from "./HoverCounter";
//import "./styles.css";
//import Input from "./Input";
//import TodoList from "./TodoList";
import Greet from "./Greet";
export default class App extends React.Component {
 /* state = {
    todos: [],
    value: ""
  };
  handleEnter = () => {
    const { todos, value } = this.state;
    const todo = <p>{value}</p>;
    this.setState({
      todos: [...todos, todo]
    });
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };*/
  render() {
    return (
    /* <div className="App">
        <Input
          handleEnter={this.handleEnter}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <TodoList todos={this.state.todos} /> 
        <div>
        <ClickCounter />
        <HoverCounter />
      </div> */
  <Greet></Greet>
    );
  }
}

