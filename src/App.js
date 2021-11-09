import React from 'react';
import './App.css';

import Pokemon from './component/RandomComponent/Pokemon/Pokemon';
import pokeData from './component/RandomComponent/Pokemon/Pokedata';
function PokeCard(data) {
  return <Pokemon key={data.id}
    name={data.name}
    src={data.src}
    type={data.type}
    power={data.Power}
  />
}

function App() {
  return (
		<div className="App">
      <h1>Poke Games</h1>
      {pokeData.map(PokeCard)}
		</div>
	);
}

export default App;
