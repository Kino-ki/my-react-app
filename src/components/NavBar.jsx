import PropTypes from "prop-types";
import React from "react";

function NavBar({setpokemonIndex, pokemonList,pokemonIndex}) {
  {pokemonIndex===3 && alert('pika, pikachuu')}
   return (
        <div>
          {pokemonList.map((pokemon, index) =>(
            <button
              type="button"
              onClick={() => setpokemonIndex(index)}
              key={pokemon.name}
            >
              {pokemon.name}
            </button>
          ))}
        </div>
      );
  
}


NavBar.protoTypes = {
  pokemonIndex:PropTypes.number.isRequired,
  pokemonList:PropTypes.arrayOf(
    PropTypes.shape({
    name:PropTypes.string
  }))
}
export default NavBar;
