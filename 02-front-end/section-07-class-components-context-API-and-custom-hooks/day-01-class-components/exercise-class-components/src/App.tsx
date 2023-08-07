
import React from 'react';
import './App.css'

class App extends React.Component {
  handleClick = () => {
    alert('Hello World!');
  };

  render() {
    return (
      <div className='App'>
        <button onClick={ this.handleClick }>Click!</button>
      </div>
    )
  }
}


export default App
