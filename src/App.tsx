import React from 'react';
import './App.css';
import MainSection from './components/MainSection';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col max-w-screen-md min-h-screen m-auto text-stone-800">
      <header className="flex justify-center py-2 text-center">
        <h1 className="w-1/2 py-1 text-3xl font-semibold border-2 border-slate-700">
          Pokedex
        </h1>
      </header>

      <main className="grid flex-grow h-full grid-cols-3 px-2 py-2 lg:grid-cols-9 lg:px-0">
        <MainSection />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
