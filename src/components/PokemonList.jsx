// import React from 'react'
import PokemonCard from './PokemonCard'
import MOCK_DATA from '../MOCK_DATA'
import { useDispatch } from 'react-redux'
import { addPokemon } from '../slices/pokemonSlice'
import { CardList } from '../styled/PokemonListStyle'


const PokemonList = () => {
  const dispath = useDispatch();

  const handleAddButton = (pokemon) => {
    dispath(addPokemon(pokemon));
}

  return (
    <CardList>
        {MOCK_DATA.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} handleAddButton={handleAddButton}/>
        ))}
    </CardList>
  )
}

export default PokemonList;