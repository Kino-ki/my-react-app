import React from 'react';
import { useState } from 'react';
import PokemonCard from "./components/PokemonCard";
import NavBar from './components/NavBar';
import styles from './App.css';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
function app (){
  const [pokemonIndex, setpokemonIndex ]=useState(0);
  return(
    <>
        <NavBar pokemonIndex={pokemonIndex} setpokemonIndex={setpokemonIndex} pokemonList={pokemonList}/>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </>

  )
};

export default app;