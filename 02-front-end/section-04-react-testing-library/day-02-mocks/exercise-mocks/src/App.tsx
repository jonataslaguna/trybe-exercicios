import React, { useState, useEffect } from 'react';


function App() {
  const [joke, setJoke] = useState('');

  const handleClick = async () => {
    await fetchJoke();
  }

  useEffect(() => {
    fetchJoke();
  }, []);
  
  async function fetchJoke() {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    const response = await fetch(API_URL, REQUEST_CONFIG);
    const data = await response.json();
    setJoke(data.joke)
  }
  return (
    <div className="App">
      <p>{joke}</p>
      <button 
       onClick={ handleClick }
      >
      New joke
      </button>
    </div>
  );
}

export default App;