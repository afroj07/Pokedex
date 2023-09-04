import React, { useState } from 'react';
import './pokedex.scss'
import Search from '../search/Search.jsx';
import PokedexList from '../pokedexList/PokedexList';
import PokemonDetails from '../PokemonDetails/PokemonDetails';

const Pokedex = () => {
  const [searchTerm, setSearchterm]= useState('');

 
  return (
    < div className='pokedex-wrapper'>
      <Search updateSearchTerm={setSearchterm}/>
     <searchTerm/>
      {(!searchTerm)?<PokedexList/>:<PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
   </div>
    )
}

export default Pokedex