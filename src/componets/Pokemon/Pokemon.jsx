import React from 'react'
import './Pokemon.scss'
import { Link } from 'react-router-dom';

const Pokemon = ({name, image, id}) => {
  return (
    <div className='pokemon' >
      <Link to={`pokemon/${id}`}>
          <div>{name}</div>
        <div><img  id='img' src={image}  /></div>
        
      </Link>
   </div>
        
  )
}

export default Pokemon