import { useState } from 'react'
import './App.css'
import Pokedex from './componets/pokedex/Pokedex'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PokemonDetails from './componets/PokemonDetails/PokemonDetails'

function App() {
 
  return(
  <>
   <Router>
   <h1 className='heading'>Pokedex</h1>
    <Routes>
      <Route path='/' element={<Pokedex/>}/>
      <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
    </Routes>
   </Router>

  </>
 )
}

export default App
