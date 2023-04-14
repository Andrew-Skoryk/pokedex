import React from 'react';
import { Pokemon } from 'pokenode-ts';

type Props = {
  pokemon: Pokemon;
};

function PokemonDetails({ pokemon }: Props) {
  if (!pokemon) {
    return null;
  }

  return (
    <article className="p-2 border border-stone-700">
      <img
        src={pokemon.sprites.front_default!}
        alt={pokemon.name}
        className="w-full border border-stone-700"
      />
      <h2 className="font-semibold ">{`${pokemon.name} #${pokemon.id}`}</h2>
      <p>Type: {pokemon.types.map((t) => t.type.name).join(', ')}</p>
      <p>
        Attack: {pokemon.stats.find((s) => s.stat.name === 'attack')?.base_stat}
      </p>
      <p>
        Defense:{' '}
        {pokemon.stats.find((s) => s.stat.name === 'defense')?.base_stat}
      </p>
      <p>HP: {pokemon.stats.find((s) => s.stat.name === 'hp')?.base_stat}</p>
      <p>
        SP Attack:{' '}
        {pokemon.stats.find((s) => s.stat.name === 'special-attack')?.base_stat}
      </p>
      <p>
        SP Defense:{' '}
        {
          pokemon.stats.find((s) => s.stat.name === 'special-defense')
            ?.base_stat
        }
      </p>
      <p>
        Speed: {pokemon.stats.find((s) => s.stat.name === 'speed')?.base_stat}
      </p>
      <p>Weight: {pokemon.weight}</p>
      <p>Total Moves: {pokemon.moves.length}</p>
    </article>
  );
}

export default PokemonDetails;
