import React from 'react'
export default class TodoList extends React.Component{
  render(){
    return(
      <div>{this.props.todos}</div>
    )
  }
}