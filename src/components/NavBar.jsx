import { useState } from "react";

const NavBar = ({setpokemonIndex,pokemonList}) => {
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