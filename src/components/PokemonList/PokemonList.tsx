import React, { useRef, useEffect, useMemo } from 'react';
import { Pokemon } from 'pokenode-ts';
import { InfiniteData } from 'react-query/';
import { motion } from 'framer-motion';
import PokemonCard from '../PokemonCard';

type Props = {
  pokemonData: InfiniteData<Pokemon[]>;
  onSelectPokemon: React.Dispatch<React.SetStateAction<Pokemon | null>>;
  filterType: string | null;
};

function PokemonList({ pokemonData, onSelectPokemon, filterType }: Props) {
  const pokemons = pokemonData.pages.flatMap((page) => page);

  const filteredPokemons = useMemo(() => {
    if (!filterType) return pokemons;

    return pokemons.filter((pokemon) =>
      pokemon.types.some((type) => type.type.name === filterType)
    );
  }, [pokemons, filterType]);

  const previousLengthRef = useRef(filteredPokemons.length);

  useEffect(() => {
    previousLengthRef.current = filteredPokemons.length;
  }, [filteredPokemons.length]);

  if (filteredPokemons.length === 0) {
    return (
      <h2 className="flex flex-col p-4 text-lg font-semibold md:text-2xl text-rose-700 gap-y-3">
        No Pokemons Found
        <hr />
        <small>
          Please Load More or ty to change filter
          <br />
          Number of loaded Pokemons: {pokemons.length}
        </small>
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 mb-4 lg:gap-4 md:grid-cols-3 lg:grid-cols-4">
      {filteredPokemons.map((pokemon, index) => {
        const isNewPokemon = index >= previousLengthRef.current;
        const delay = isNewPokemon
          ? (index - previousLengthRef.current) * 0.05
          : index * 0.05;

        return (
          <div className="w-full">
            <motion.div
              key={pokemon.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay }}
            >
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onClick={() => onSelectPokemon(pokemon)}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonList;
