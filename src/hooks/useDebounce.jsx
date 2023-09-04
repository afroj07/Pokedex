import React from 'react'

const useDebounce = (cb, delay=1000) => {
    let timeId;
  return (...args)=>{
    clearTimeout(timeId);
    timeId=setTimeout(()=>{
        cb(...args);
    }, delay)
  }
}

export default useDebounce;