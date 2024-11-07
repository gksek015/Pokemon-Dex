// import React from 'react'
import { useState } from 'react';
import DashBoard from '../components/DashBoard'
import PokemonList from '../components/PokemonList'

const Dex = () => {

const [selectedPokemon, setSelectedPokemon] = useState([]);

const addPokemon = (pokemon) => {
    const isAlreadySelected = selectedPokemon.some((item) => {
        return item && item.id === pokemon.id;
    });

    if (isAlreadySelected) {
        alert("이미 선택된 포켓몬입니다.")
        return;
    }

    if (selectedPokemon.length <= 6 && !selectedPokemon.includes(pokemon)) {
        setSelectedPokemon([...selectedPokemon, pokemon]);
    }
} 

  return (
    <div>
        <DashBoard selectedPokemon={selectedPokemon}/>
        <PokemonList onAddPokemon={addPokemon}/>
    </div>
  )
}

export default Dex