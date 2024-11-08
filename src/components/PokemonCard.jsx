// import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CardContainer = styled.div`
    margin-top: 20px;
`

const Card = styled.div`
display: grid;
grid-gap: 10px;
flex-direction: row;
align-items: center;
justify-content: center;
border: 1px solid white;
border-radius: 5px;
background-color: white;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
width: 100px;
text-align: center;
padding: 20px;
margin: 10px;
`

const PokemonCard = ({pokemon, addPokemon}) => {
    const navigate = useNavigate();

    const handleGoToDetail = () => {
        navigate(`/pokemon/${pokemon.id}`);
    };

    const handleAddButton = () => {
        addPokemon(pokemon);
    }

  return (
    <CardContainer>
        <Card>
            <img src={pokemon.img_url} alt={pokemon.korean_name} onClick={handleGoToDetail}/>
        <h3>{pokemon.korean_name}</h3>
        <p>NO. {pokemon.id}</p>
        <button onClick={handleAddButton}>추가</button>
        </Card>
    </CardContainer>
  )
}

export default PokemonCard;