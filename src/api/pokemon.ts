import { PokemonClient } from 'pokenode-ts';

const apiClient = new PokemonClient();

const getPokemonsWithDetails = async (offset: number, limit: number) => {
  const { results } = await apiClient.listPokemons(offset, limit);
  const detailedPokemons = await Promise.all(
    results.map((pokemon) => apiClient.getPokemonByName(pokemon.name))
  );

  return detailedPokemons;
};

export default getPokemonsWithDetails;
