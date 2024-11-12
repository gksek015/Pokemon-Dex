// import React from 'react'
import { useState } from 'react';
import DashBoard from '../components/DashBoard'
import PokemonList from '../components/PokemonList'
import { PokemonContext } from '../context/Context';
import { toast } from 'react-toastify';

const Dex = () => {

const [selectedPokemon, setSelectedPokemon] = useState([]);

const addPokemon = (pokemon) => {
    const isAlreadySelected = selectedPokemon.some((item) => {
        return item && item.id === pokemon.id;
    });

    if (isAlreadySelected) {
        toast.info("이미 선택된 포켓몬입니다.")
        return;
    }

    if (selectedPokemon.length < 6) {
        setSelectedPokemon([...selectedPokemon, pokemon]);
    } else {
        toast.info("포켓몬은 최대 6개까지 선택할 수 있습니다.")
    }
};

const handleRemovePokemon = (id) => {
    setSelectedPokemon(selectedPokemon.filter((pokemon) => pokemon.id !== id));
}

  return (
    <div>
        <PokemonContext.Provider value={{selectedPokemon, handleRemovePokemon, addPokemon}}>
            <DashBoard />
            <PokemonList/>
        </PokemonContext.Provider>
        
    </div>
  )
}

export default Dex