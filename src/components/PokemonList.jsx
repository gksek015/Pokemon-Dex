// import React from 'react'
import PokemonCard from './PokemonCard'
import MOCK_DATA from '../MOCK_DATA'

const PokemonList = ({onAddPokemon}) => {
  return (
    <div>
        {MOCK_DATA.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAddPokemon}/>
        ))}
    </div>
  )
}

export default PokemonList