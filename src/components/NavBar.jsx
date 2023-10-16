import PropTypes from "prop-types";


function NavBar({setpokemonIndex, pokemonList}) {
    return(
        {pokemonList.map((pokemon,index) =>(
          <button
          type ="button"
          onClick={() =>setpokemonIndex(index)} 
          key={pokemon.name}>
            {pokemon.name}
          </button>
        ))}
    )
}


NavBar.protoTypes = {
  pokemonIndex:PropTypes.number.isRequired,
  pokemonList:PropTypes.arrayOf(PropTypes.shape({
    name:PropTypes.string
  }))
}
export default NavBar;
