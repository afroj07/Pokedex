import { useState } from 'react'
import './App.css'
import Pokedex from './componets/pokedex/Pokedex'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PokemonDetails from './componets/PokemonDetails/PokemonDetails.jsx'

function App() {
 
  return(
  <>
   <Router>
    <Routes>
      <Route path='/' element={<Pokedex/>}/>
      <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
    </Routes>
   </Router>

  </>
 )
}

export default App
