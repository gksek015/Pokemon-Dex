// import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addPokemon } from '../slices/pokemonSlice';
import { CardContainer, Card, AddButton } from '../styled/PokemonCardStyle';


const PokemonCard = ({pokemon}) => {
    const dispath = useDispatch();
    const navigate = useNavigate();

    const handleGoToDetail = () => {
        navigate(`/pokemon/${pokemon.id}`);
    };

    const handleAddButton = () => {
        dispath(addPokemon(pokemon));
    }

  return (
    <CardContainer>
        <Card>
            <img src={pokemon.img_url} alt={pokemon.korean_name} onClick={handleGoToDetail}/>
        <h3>{pokemon.korean_name}</h3>
        <p>NO. {pokemon.id}</p>
        <AddButton onClick={handleAddButton}>추가</AddButton>
        </Card>
    </CardContainer>
  )
}

export default PokemonCard;