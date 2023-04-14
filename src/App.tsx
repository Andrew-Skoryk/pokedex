import React, { useState } from 'react';
import { Pokemon } from 'pokenode-ts';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  return (
    <div className="flex flex-col max-w-screen-md min-h-screen m-auto text-stone-800">
      <header className="flex justify-center py-2 text-center">
        <h1 className="w-1/4 py-1 text-3xl font-semibold border-2 xl:w-1/3 border-slate-700">
          Pokedex
        </h1>
      </header>

      <main className="grid flex-grow h-full grid-cols-9 py-2">
        <PokemonList onSelectPokemon={setSelectedPokemon} />
        <aside className="fixed w-1/6 right-1/4">
          {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
        </aside>
      </main>
    </div>
  );
}

export default App;
