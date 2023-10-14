import React from 'react';
import PokemonCard from "./components/PokemonCard";

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
function app (){
  return(
    <PokemonCard pokemon={pokemonList[0]}/>   
  )
}

export default app;