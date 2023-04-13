import { useQuery } from 'react-query';
import getPokemonsWithDetails from '../api/pokemon';

const usePokemons = (offset: number, limit: number) => {
  return useQuery(['pokemons', offset, limit], () =>
    getPokemonsWithDetails(offset, limit)
  );
};

export default usePokemons;
