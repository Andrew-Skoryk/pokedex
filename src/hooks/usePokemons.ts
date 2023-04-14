import { useInfiniteQuery } from 'react-query';
import getPokemonsWithDetails from '../api/pokemon';

const usePokemons = (limit: number) => {
  return useInfiniteQuery(
    'pokemons',
    ({ pageParam = 0 }) => getPokemonsWithDetails(pageParam, limit),
    {
      getNextPageParam: (_lastPage, pages) => pages.length * limit,
    }
  );
};

export default usePokemons;
