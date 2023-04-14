import React from 'react';
import { Pokemon } from 'pokenode-ts';

type Props = {
  pokemon: Pokemon;
};

function formatStatName(statName: string) {
  switch (statName) {
    case 'special-attack':
      return 'SP Attack';
    case 'special-defense':
      return 'SP Defense';
    default:
      return statName;
  }
}

function PokemonDetails({ pokemon }: Props) {
  const { id, sprites, name, types, stats, weight } = pokemon;
  const formattedId = id.toString().padStart(3, '0');

  return (
    <div className="flex flex-col items-center p-2 border border-slate-700">
      <img
        src={sprites.front_default!}
        alt={name}
        className="w-full mb-3 border border-stone-700 aspect-square"
      />

      <h2 className="mb-1.5 text-lg font-bold capitalize">{`${name} #${formattedId}`}</h2>

      <table className="w-full text-center border border-collapse border-slate-700">
        <tbody>
          {types.map((t) => (
            <tr key={t.type.name}>
              <td className="border border-slate-700">Type</td>
              <td className="capitalize border border-slate-700">
                {t.type.name}
              </td>
            </tr>
          ))}
          {stats.map((s) => (
            <tr key={s.stat.name}>
              <td className="capitalize border border-slate-700">
                {formatStatName(s.stat.name)}
              </td>
              <td className="border border-slate-700">{s.base_stat}</td>
            </tr>
          ))}
          <tr>
            <td className="border border-slate-700">Weight</td>
            <td className="border border-slate-700">{weight}</td>
          </tr>
          <tr>
            <td className="border border-slate-700">Total moves</td>
            <td className="border border-slate-700">{pokemon.moves.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PokemonDetails;
