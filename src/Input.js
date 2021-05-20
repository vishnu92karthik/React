import React from "react";
export default class Input extends React.Component {
  render() {
    return (
      <div>
        <input onChange={this.props.handleChange} value={this.props.value} />
        <button onClick={(this.props.handleEnter)}>Add Todo</button>
      </div>
    );
  }
}
