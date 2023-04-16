import React from 'react';
import './App.css';
import MainSection from './components/MainSection';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen m-auto xl:max-w-screen-lg text-stone-800">
      <header className="flex justify-center py-2 text-center">
        <h1 className="w-1/2 py-1 text-3xl font-semibold border-2 border-slate-700">
          Pokedex
        </h1>
      </header>

      <main className="grid flex-grow h-full grid-cols-2 px-2 py-2 md:grid-cols-5 lg:grid-cols-9 xl:px-0 md:px-4 lg:px-10">
        <MainSection />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
