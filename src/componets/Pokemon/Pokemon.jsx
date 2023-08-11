import React from 'react'
import './Pokemon.scss'

const Pokemon = ({name, image}) => {
  return (
    <div className='pokemon' >
        <div>{name}</div>
        <div><img src={image}  /></div>
    </div>
  )
}

export default Pokemon