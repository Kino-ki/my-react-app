import PropTypes from "prop-types";


function NavBar ({pokemonIndex,setpokemonIndex,pokemonList}) {
  // const pickPrevious = () => setpokemonIndex(pokemonIndex - 1)
    return (
        <>
        {pokemonIndex>0?(
          <button onClick = {()=>setpokemonIndex(pokemonIndex-1)}>Previous</button>
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
export default NavBar;