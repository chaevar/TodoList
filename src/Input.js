import React from 'react';
import './App.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.props.changeInput(e.target.value);
  }

  render() {
    return (
      <div className="inputCard" >
        <input
          className="input"
          type="text"
          placeholder="Write in"
          onChange={ this.onChange }
          value={ this.props.value } />
      </div>
    )
  }
}

export default Input;