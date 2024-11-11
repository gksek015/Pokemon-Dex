// import React from 'react'
import PokemonCard from './PokemonCard'
import MOCK_DATA from '../MOCK_DATA'
import styled from 'styled-components'
import { useContext } from 'react'
import { PokemonContext } from '../context/Context'

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    background-color: #FFF5E0;
    border-radius: 5px;
    width: 100%;
`;

const PokemonList = () => {
  const {addPokemon} = useContext(PokemonContext);

  return (
    <CardList>
        {MOCK_DATA.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon}/>
        ))}
    </CardList>
  )
}

export default PokemonList;