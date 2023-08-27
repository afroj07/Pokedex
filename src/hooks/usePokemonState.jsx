
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const usePokemonState = () => {

  const [pokemonListState, setPokemonListState] = useState({
    pokemonList:[],
    isLoading:true,
    Pokedex_URL:'https://pokeapi.co/api/v2/pokemon',
    next_URL:'',
    prevURL:''
  })
  async function downloadpokemons (){

    setPokemonListState((state)=>({
      ...state, isLoading:true}));
         
    
    const response = await axios.get(pokemonListState.Pokedex_URL);

      const pokemonResults=response.data.results;

          setPokemonListState((state)=>({
            ...state, 
            next_URL:response.data.next,
             prevURL:response.data.previous
            }));
  
          //iterating over the array of pokemon and using their url to create array of promises
          //that will download 20 pokemon


    
          const pokemonResultsPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url));
        const   pokemonData = await axios.all(pokemonResultsPromise);
        //array of 20 pokemon details

       const res= pokemonData.map((pokedata)=>{
            const pokemon = pokedata.data;
            return{
              id:pokemon.id,
               name:pokemon.name, 
              image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny, 
              types:pokemon.types 
            }

          });

          setPokemonListState((state)=>({
            ...state,
            pokemonList:res,
             isLoading:false
            }));
          }
    useEffect(()=>{
 downloadpokemons();
    },[pokemonListState.Pokedex_URL]);
       

    
  return [pokemonListState, setPokemonListState];
}

export default usePokemonState