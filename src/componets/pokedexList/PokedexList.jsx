
import './PokedexList.scss'
import Pokemon from '../Pokemon/Pokemon.jsx';
import usePokemonState from '../../hooks/usePokemonState';

const PokedexList = () => {

 const [pokemonListState, setPokemonListState]= usePokemonState('https://pokeapi.co/api/v2/pokemon', false);
  return (
    <div className='pokemon-list-wrapper'>
     <div className='pokedexList'><h3>PokedexList</h3></div>
     <div className='pokemon-wrapper'>
     {(pokemonListState.isLoading)? 'Loading...':pokemonListState.pokemonList.map((p)=>
    <Pokemon name={p.name} await image={p.image} key={p.id} id={p.id} />)
    }  
     </div>
     <div className='btn'>
      <button disabled ={pokemonListState.prevURL==null} onClick={()=>setPokemonListState({...pokemonListState, Pokedex_URL:pokemonListState.prevURL})}>prev</button>
      <button disabled ={pokemonListState.next_URL==null} onClick={()=>setPokemonListState({...pokemonListState, Pokedex_URL:pokemonListState.next_URL})}>next</button>
     </div>
   </div>
  )
}

export default PokedexList