//import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import MOCK_DATA from '../MOCK_DATA';

const DetailContainer = styled.div`
    text-align: center;
    margin-top: 20px;
`

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState();

    const getPokemonId = (id) => {
    return MOCK_DATA.find((pokemon) => pokemon.id === Number(id));
};

    useEffect(()=> {
        const fetchPokemon = getPokemonId(id);
        setPokemon(fetchPokemon);
    }, [id])

    // if (!pokemon) {
    //     return null;
    // } 

    return (
    <DetailContainer>
        <img src={pokemon?.img_url} alt={pokemon?.korean_name}/>
        <h1>{pokemon?.korean_name}</h1>
        <p>{pokemon?.description}</p>
        <p>타입 : {pokemon?.types.join(", ")}</p>
    </DetailContainer>
  )
    }
;

export default PokemonDetail