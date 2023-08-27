import { useParams } from "react-router-dom";
import usePokemonDetails from "../../hooks/usePokemonDetails";
import './PokemonDetails.scss'
function PokemonDetails({ pokemonName }) {
    const {id} = useParams();
    const [pokemon] = usePokemonDetails(id, pokemonName);
    return (
        <div className="pokemon-details-wrapper">
          <div>

          <img className="pokemon-details-image" src={pokemon.image} />
            <div className="pokemon-details-name"><span> Name: {pokemon.name}</span></div>
            <div className="pokemon-details-name">Height: {pokemon.height}</div>
            <div className="pokemon-details-name">Weight: {pokemon.weight}</div>
            <div className="pokemon-details-types">
              Type:{pokemon.types && pokemon.types.map((t) => <div key={t}> {t} </div>)} 
              <hr />
            </div>

            {
                pokemon.types && pokemon.similarPokemons && 
                <div>
                    more {pokemon.types[0]} type pokemons

                    <ul>
                        {pokemon.similarPokemons.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)}

                    </ul>
                </div>
            }
          </div>
            
        </div>
    );
}

export default PokemonDetails;