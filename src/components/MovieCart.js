import React from 'react'
import { IMAGECDNURL } from '../utils/constant'

const MovieCart = ({posterPath}) => {
  return (
    <div className='w-36 pr-2'>
      <img alt="Movie Card" src ={IMAGECDNURL + posterPath}/>
    </div>
  )
}

export default MovieCart
