// import React from 'react'
import PokemonCard from './PokemonCard'
import MOCK_DATA from '../MOCK_DATA'
import styled from 'styled-components'

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    padding-top: 300px;
`

const PokemonList = ({onAddPokemon}) => {
  return (
    <CardList>
        {MOCK_DATA.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onAdd={onAddPokemon}/>
        ))}
    </CardList>
  )
}

export default PokemonList