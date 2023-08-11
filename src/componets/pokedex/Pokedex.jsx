import React from 'react';
import './pokedex.scss'
import Search from '../search/Search.jsx';
import PokedexList from '../pokedexList/PokedexList';

const Pokedex = () => {
  return (
    < div className='pokedex-wrapper'>
   <h1>Pokedex</h1>
      <Search/>
      <PokedexList/>
      </div>
    )
}

export default Pokedex