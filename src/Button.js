import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
        className='button' onClick={ this.props.addTask }>
        + New task
      </button>
    )
  }
}

export default Button;