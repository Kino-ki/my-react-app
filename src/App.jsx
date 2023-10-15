import React from 'react';
import { useState } from 'react';
import PokemonCard from "./components/PokemonCard";
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
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        {pokemonIndex>0?(
          <button onClick = {()=>  setpokemonIndex(pokemonIndex-1)}>Previous</button>
          ):(
            <></>
          )
      }
      {pokemonIndex<pokemonList.length-1?(
        <button onClick={()=> setpokemonIndex(pokemonIndex+1)}>Next</button>
      ):(<></>)
    }
        
    </>

  )
}

export default app;