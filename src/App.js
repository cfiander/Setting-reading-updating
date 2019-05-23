import React from 'react';
import TheDate from './state/TheDate.js';
import Counter from './state/Counter.js';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/bomb.js';
import RouletteGun from './state-drills/RouletteGun.js';

function App() {
  return (
    <main className='App'>
      <RouletteGun />
      <Bomb /> 
      <Counter count={123} />
      <TheDate />
      <HelloWorld />
    </main>
  );
}

export default App;