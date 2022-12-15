import React from 'react';
import './App.css';
import ChangeIcon from "./ChangeIcon";
import DeleteIcon from "./DeleteIcon";
import Check from "./Check";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.oonChange = this.oonChange.bind(this)
    this.changeInputChange = this.changeInputChange.bind(this)
    this.changeClick = this.changeClick.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    this.state = {isInputShow: false, task: this.props.value}
  }

  changeClick() {
    this.state.isInputShow ? this.setState({isInputShow: false}) : this.setState({isInputShow: true})
  }

  saveChanges() {
    this.state.task ? (this.setState({isInputShow: false, task: this.state.task})) : (this.props.removeTask(this.props.id))
  }

  oonChange (e) {
    this.changeInputChange(e.target.value);
  }

  changeInputChange (task) {
    this.setState({
      task,
    })
  }

  render() {
    return (
      <div className='taskPanel'>
        <div className='newElement' >
          <div className='circle' > </div>
          <div className='changeDelete'> {this.state.isInputShow ? (
            <div className='inputSave'>
              <input
                className='changeInput'
                type="text"
                onChange={ this.oonChange }
                value={ this.state.task } />
              <div className='icons'>
                <button className='save' onClick={this.saveChanges} > <Check></Check> </button>
                <button className='delete' onClick={() => this.props.removeTask(this.props.id)} > <DeleteIcon></DeleteIcon> </button>
              </div>
            </div>) : ( <div className='field'>
            <div className='task' > {this.state.task}  </div>
            <div className='icons'>
              <button className="changeClick" onClick={this.changeClick} > <ChangeIcon></ChangeIcon> </button>
              <button className='delete' onClick={() => this.props.removeTask(this.props.id)} > <DeleteIcon></DeleteIcon> </button>
            </div>
          </div>)}

          </div>
        </div>
      </div>
    )
  }
}

export default Item;