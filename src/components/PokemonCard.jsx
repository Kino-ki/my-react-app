import React from 'react';

const pokemonList = [
  {
    name: 'bulbasaur',
    imgSrc:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'mew',
  },
];
const PokemonCard = () =>{
  const pokemonElement = pokemonList.map((pokemon) => (
    pokemon.imgSrc !== undefined ? (
      <figure>
        <img src={pokemon.imgSrc} alt={pokemon.name.toUpperCase()} />
        <figcaption>{pokemon.name.toUpperCase()}</figcaption>
      </figure>
    ) : (
      <figure>
        <p>???</p>
        <figcaption>{pokemon.name.toUpperCase()}</figcaption>
      </figure>
    )
  ));
  return (pokemonElement);
}

export default PokemonCard;
