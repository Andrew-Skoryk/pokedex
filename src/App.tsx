import React, { useState } from 'react';
import { Pokemon } from 'pokenode-ts';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  return (
    <div className="flex flex-col max-w-screen-md min-h-screen m-auto text-stone-800">
      <header className="flex justify-center py-2 text-center">
        <h1 className="w-1/2 py-1 text-3xl font-semibold border-2 border-slate-700">
          Pokedex
        </h1>
      </header>

      <main className="grid flex-grow h-full grid-cols-2 px-2 py-2 lg:grid-cols-9 lg:px-0">
        <PokemonList onSelectPokemon={setSelectedPokemon} />

        <aside className="fixed hidden lg:w-52 xl:right-1/4 xl:top-36 lg:right-52">
          {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
        </aside>
      </main>
    </div>
  );
}

export default App;
