import React from 'react';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
      </header>
      <main>
        <section>
          Pokemon carts <PokemonList />
        </section>
      </main>
    </div>
  );
}

export default App;
