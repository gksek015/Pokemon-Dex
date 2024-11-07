//import React from 'react'
import styled from "styled-components"

const DashboardContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    border: 1px solid black;
`;

const CardContainer = styled.div`
    position: relative;
    padding: 20px;
    width: 150px;
    text-align: center;
    border: 1px solid black;
    border-radius: 5px;
`

const DashBoard = ({selectedPokemon, handleRemovePokemon}) => {
  return (
    <div>
        <DashboardContainer>
            {selectedPokemon.map((pokemon) => (
                <CardContainer key={pokemon.id}>
                    <img src={pokemon.img_url} alt={pokemon.korean_name}/>
                    <h4>{pokemon.korean_name}</h4>
                    <button onClick={() => handleRemovePokemon(pokemon.id)}>삭제</button>
                </CardContainer>
            ))}
        </DashboardContainer>
    </div>
  )
}

export default DashBoard