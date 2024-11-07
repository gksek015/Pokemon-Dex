// import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
border: 1px solid black;
border-radius: 5px;
background-color: white;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
padding: 10px;
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
    <Card>
        <img src={pokemon.img_url} alt={pokemon.korean_name} onClick={handleGoToDetail}/>
        <h3>{pokemon.korean_name}</h3>
        <p>NO. {pokemon.id}</p>
        <button onClick={handleAddButton}>추가</button>
    </Card>
  )
}

export default PokemonCard;