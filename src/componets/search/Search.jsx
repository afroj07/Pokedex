import React from 'react'
import './Search.scss'
import useDebounce from '../../hooks/useDebounce'
const Search = ({updateSearchTerm}) => {
 const debounceCallback = useDebounce((e)=>updateSearchTerm(e.target.value))
  return (
    <div className='search-wrapper'>
 <input 
 id='pokemon-name-search'
  type='text'
  placeholder='pokemon name..'
  onChange={debounceCallback}
  />
    </div>
  )
}

export default Search