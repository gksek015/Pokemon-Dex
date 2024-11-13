import { useDispatch, useSelector } from "react-redux";
import { removePokemon } from "../slices/pokemonSlice";
import { DashboardContainer, Title, InsideCard, CardContainer, PokemonImg, PokemonName, RemoveButton, Inside, PokeBall } from "../styled/DashboardStyle";


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