import React from 'react';
import './App.css'
import RandomNumber from './components/RandomNumber';

type AppState = {
  showNumber: boolean,
};


 class App extends React.Component <object, AppState> {
  state = {
    showNumber: false,
  }

  handleClick = () => {
    this.setState((prev) => (
      { showNumber: !prev.showNumber}
      ));
  };
  
  render() {
    
       const { showNumber } = this.state;

    return (
      <div>
        {
          showNumber 
          ? (<RandomNumber
           max={ 100 }
          />)
          : (<h1>?</h1>)
        }
        <button
        onClick={ this.handleClick }
        >
          {showNumber ? 'Hide' : 'Show'}
        </button>
      </div>
     );
  }


 /*  handleClick = () => {
    alert('Hello World!');
  };

  render() {
    return (
      <div className='App'>
        <button onClick={ this.handleClick }>Click!</button>
      </div>
    )
  } */
}
 

export default App;
