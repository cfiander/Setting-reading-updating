import React from 'react';
import TheDate from './state/TheDate.js';
import Counter from './state/Counter.js';

function App() {
  return (
    <main className='App'>
      
      <Counter count={123} />
    </main>
  );
}

export default App;