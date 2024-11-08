// import React from 'react'
import PokemonCard from './PokemonCard'
import MOCK_DATA from '../MOCK_DATA'
import styled from 'styled-components'

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`

const PokemonList = ({addPokemon}) => {
  return (
    <CardList>
        {MOCK_DATA.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon}/>
        ))}
    </CardList>
  )
}

export default PokemonList;