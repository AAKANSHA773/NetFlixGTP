import React from 'react'
import GptSearchBar from './GptSearchBar'
import GtpMovieSuggestion from './GtpMovieSuggestion'
import { BACKGROUNDIMAGE } from '../utils/constant'

const GtpSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BACKGROUNDIMAGE}
          alt="background"
        />
      </div>
      <GptSearchBar/>
      <GtpMovieSuggestion/>
    </div>
  )
}

export default GtpSearch
