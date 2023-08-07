import React from 'react';
import './App.css'
import RandomNumber from './components/RandomNumber';


 class App extends React.Component {
  render() {
    return (
      <RandomNumber
       max={ 100 }
      />
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
