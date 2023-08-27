import React, { useState } from 'react';
import './pokedex.scss'
import Search from '../search/Search.jsx';
import PokedexList from '../pokedexList/PokedexList';

const Pokedex = () => {
  const [searchTerm, setSearchterm]= useState('');
  return (
    < div className='pokedex-wrapper'>
      <Search updateSearchTerm={setSearchterm}/>
     <searchTerm/>
      {(searchTerm.length==0)?<PokedexList/>:''}
   </div>
    )
}

export default Pokedex