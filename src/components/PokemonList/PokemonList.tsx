import React from 'react';
import usePokemons from '../../hooks/usePokemons';

function PokemonList() {
  const { data, isLoading, isError } = usePokemons(0, 12);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error occurred</div>;
  }

  return (
    <section>
      {data.map((pokemon) => (
        <div key={pokemon.id}>
          <img src={pokemon.sprites.front_default!} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
        </div>
      ))}
    </section>
  );
}

export default PokemonList;
