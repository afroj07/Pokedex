import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './PokedexList.scss'
import Pokemon from '../Pokemon/Pokemon';

const PokedexList = () => {

  const [pokemonList , setPokemonList]= useState([])
  const [ isLoading , setIsLoading] = useState(true);

  const [Pokedesx_URL, setPokedx_URL]=useState('https://pokeapi.co/api/v2/pokemon')
  const[ next_URL, setNextURL]=useState('');
  const[prevURL, setPrevURL]= useState('');
  async function downloadpokemons (){
     setIsLoading(true);
          const response = await axios.get(Pokedesx_URL);
          console.log(response.data);
          setNextURL(response.data.next);
          setPrevURL(response.data.previous);
          //iterating over the array of pokemon and using their url to create array of promises
          //that will download 20 pokemon
          const pokemonResults = response.data.results;
          const pokemonResultsPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url));
        const   pokemonData = await axios.all(pokemonResultsPromise);
        //array of 20 pokemon details
          console.log(pokemonData);
       const res= pokemonData.map((pokedata)=>{
            const pokemon = pokedata.data;
            return{
              id:pokemon.id,
               name:pokemon.name, 
              image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny, 
              types:pokemon.types 
            }

          });
          console.log(res)
          setPokemonList(res);
          setIsLoading(false);
     }
    useEffect(()=>{
 downloadpokemons();
    },[Pokedesx_URL]);
       
  return (
    <div className='pokemon-list-wrapper'>
     <div className='pokedexList'>PokedexList</div>
     <div className='pokemon-wrapper'>
     {(isLoading)? 'Loading...':pokemonList.map((p)=>
    <Pokemon name={p.name} await image={p.image} key={p.id} id={p.id} />)
    }  
     </div>
     <div className='btn'>
      <button disabled ={prevURL==null} onClick={()=>setPokedx_URL(prevURL)}>prev</button>
      <button disabled ={next_URL==null} onClick={()=>setPokedx_URL(next_URL)}>next</button>
     </div>
   </div>
  )
}

export default PokedexList