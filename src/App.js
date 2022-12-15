import React from 'react';
import './App.css';
import Button from './Button';
import ListTasks from "./ListTasks";
import Input from "./Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeInput = this.changeInput.bind(this)
    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.state = {inputDeed: '', listTasks: JSON.parse(window.localStorage.getItem('listTasks')) || []}
  }

  changeInput (inputDeed) {
    this.setState({
      inputDeed,
    })
  }

  removeTask (id) {
    const arr = this.state.listTasks.filter(el => el.id !== id);
    this.setState({  inputDeed: '', listTasks: arr })
    window.localStorage.setItem('listTasks', JSON.stringify(arr));
  }

  uuidv4 () {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  addTask () {
    if (this.state.inputDeed) {
      const arr = [...this.state.listTasks]
      arr.push({value: this.state.inputDeed, id: this.uuidv4()})
      this.setState({ inputDeed: '', listTasks: arr })
      window.localStorage.setItem('listTasks', JSON.stringify(arr))}
  }

  render() {
    return (
      <div className="main" >
        <div className="header">
          <h1>Todo list</h1>
        </div>
        <div>
          <div className="card" >
            <ListTasks
              listTasks={ this.state.listTasks }
              removeTask={ this.removeTask }
            />
          </div>
          <Input
            changeInput={ this.changeInput }
            value={ this.state.inputDeed }
          />
          <Button addTask={ this.addTask } />
        </div>
      </div>
    );
  }
}

export default App;
