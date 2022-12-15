import React from 'react';
import './App.css';
import Item from "./Item";

class ListTasks extends React.Component {
  render() {
    return (
      <div className="panel">
        {this.props.listTasks.map((task, index) => (
          <Item
            key={task.id}
            value={task.value}
            id={task.id}
            index={index}
            removeTask={ this.props.removeTask } />
        ))}
      </div>
    )
  }
}

export default ListTasks;