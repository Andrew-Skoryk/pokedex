import React from 'react';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="m-auto max-w-screen-2xl text-stone-800">
      <header className="flex justify-center py-6 text-center">
        <h1 className="w-1/4 py-4 text-5xl font-semibold border-4 xl:w-1/3 border-slate-700">
          Pokedex
        </h1>
      </header>
      <main className="grid grid-cols-5 gap-24 p-12">
        <PokemonList />
        <aside className="col-start-4 col-end-5">Full datails</aside>
      </main>
    </div>
  );
}

export default App;
