//import React from 'react'
import styled from "styled-components"

const DashboardContainer = styled.div`
    position: relative;
    width: 80%;
    max-width: 1200px;
    padding: 20px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    background-color: black;
    border-radius: 5px;
    justify-content: center;
    img {
        max-width: 50px;
    }
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
//const array = Array.from({length: 6}, () => null);

  return (
    <div>
        <DashboardContainer>
            <h2>나만의 포켓몬 도감</h2>
            {selectedPokemon.map((pokemon) => {
                return (
                    <CardContainer key={pokemon.id}>
                    <img src={pokemon.img_url} alt={pokemon.korean_name}/>
                    <h4>{pokemon.korean_name}</h4>
                    <RemoveButton onClick={() => handleRemovePokemon(pokemon.id)}>삭제</RemoveButton>
                </CardContainer>
                );
            })}
            {new Array(6-selectedPokemon.length).fill(null).map((_, index) => {
                return (
                    <img 
                        src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" alt="" key={index}/>
                );
            })}
        </DashboardContainer>
    </div>
  )
}

export default DashBoard