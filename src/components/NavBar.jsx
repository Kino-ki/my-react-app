import PropTypes from "prop-types";


function NavBar({pokemonList}) {
  
    return(
        {pokemonList.map((pokemon,index) =>(
          <button key={index}>
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
