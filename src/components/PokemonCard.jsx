// import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CardContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 150px;
    text-align: center;
    border: 1px solid black;
    border-radius: 5px;
    background-color: green;
    margin: 10px;
`

const Card = styled.div`
display: grid;
grid-gap: 10px;
flex-direction: row;
align-items: center;
justify-content: center;
border: 1px solid black;
border-radius: 5px;
background-color: white;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
width: 100px;
text-align: center;
`

const PokemonCard = ({pokemon, onAdd}) => {
    const navigate = useNavigate();

    const handleGoToDetail = () => {
        navigate(`/pokemon/${pokemon.id}`);
    };

    const handleAddButton = () =>{
        onAdd(pokemon);
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