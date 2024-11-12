import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { removePokemon } from "../slices/pokemonSlice";

const DashboardContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 20px;
    margin: 20px auto;
    display: flex;
    background-color: #FFF5E0;
    border-radius: 5px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    color: #735026;
    font-size: 24px;
    margin-bottom: 20px;
`;

const InsideCard = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-bottom: 20px;
`;

const Inside = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #735026;
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
    width: 100px;
    text-align: center;
    background-color: #DECEAE;
    border-radius: 5px;
    border: 1px solid #FFF5E0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const PokemonImg = styled.img`
    width: 100px;
    height: 100px;
`;

const PokemonName = styled.h4`
    color: #735026;
    margin-bottom: 20px;
`;

const RemoveButton = styled.button`
    background-color: #735026;
    color: white;
    width: 80px;
`

const DashBoard = () => {
    const dispath = useDispatch();
    const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
    const handleRemovePokemon = (pokemonId) => {
        dispath(removePokemon(pokemonId));
    }

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