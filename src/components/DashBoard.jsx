//import React from 'react'
import styled from "styled-components"

const DashboardContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 250px;
    width: 80%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background-color: black;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 150px;
    text-align: center;
    border: 1px solid white;
    border-radius: 5px;
`;

const RemoveButton = styled.button`
    background-color: red;
    color: white;
    width: 100px;
`

const DashBoard = ({selectedPokemon, handleRemovePokemon}) => {
  return (
    <div>
        <DashboardContainer>
            {selectedPokemon.map((pokemon) => (
                <CardContainer key={pokemon.id}>
                    <img src={pokemon.img_url} alt={pokemon.korean_name}/>
                    <h4>{pokemon.korean_name}</h4>
                    <RemoveButton onClick={() => handleRemovePokemon(pokemon.id)}>삭제</RemoveButton>
                </CardContainer>
            ))}
        </DashboardContainer>
    </div>
  )
}

export default DashBoard