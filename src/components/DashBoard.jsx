//import React from 'react'
import styled from "styled-components"

const DashboardContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    margin: 20px auto;
    display: flex;
    background-color: black;
    border-radius: 5px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    color: white;
    font-size: 24px;
    margin-bottom: 20px;
`;

const InsideCard = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;
`;

const Inside = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed gray;
    border-radius: 5px;
`;

const PokeBall = styled.img`
    width: 40px;
    height: 40px;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 150px;
    text-align: center;
    background-color: green;
    border: 1px solid white;
    border-radius: 5px;
`;

const PokemonImg = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #fff;
`;

const PokemonName = styled.h4`
    color: white;
    margin-bottom: 10px;
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
            <Title>나만의 포켓몬 도감</Title>
            <InsideCard>
                {selectedPokemon.map((pokemon) => {
                return (
                    <CardContainer key={pokemon.id}>
                    <PokemonImg src={pokemon.img_url} alt={pokemon.korean_name}/>
                    <PokemonName>{pokemon.korean_name}</PokemonName>
                    <RemoveButton onClick={() => handleRemovePokemon(pokemon.id)}>삭제</RemoveButton>
                </CardContainer>
                );
            })}
            {new Array(6-selectedPokemon.length).fill(null).map((_, index) => {
                return (
                    <Inside key={index}>
                    <PokeBall
                        src="https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png" alt=""/>
                        </Inside>
                );
            })}
            </InsideCard>
        </DashboardContainer>
    </div>
  )
}

export default DashBoard