import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './PokemonDetails.scss'
const PokemonDetails = () => {
  const {id} = useParams();
  const [Pokemon, setPokemon]= useState({});
  async function downloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log( response.data);
    setPokemon({
      name:response.data.name,
      image:response.data.sprites.other.dream_world.front_default,
      weight:response.data.weight,
      height:response.data.height,
      types: response.data.types.map((t)=>t.type.name)
    });
    console.log( response.data);
  }
  useEffect(()=>{
    downloadPokemon();
  }, []);
  return (
    <div className='pokemondetails'>
   <div> name:{Pokemon.name}</div>
   <div><img src={Pokemon.image} alt="image1" /></div>
   <div> height: {Pokemon.height}</div>
   <div> weight: {Pokemon.weight}</div>
   <div>
    type:{Pokemon.types}
   </div>
   </div>
  )
}

export default PokemonDetails