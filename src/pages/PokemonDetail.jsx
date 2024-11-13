import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import MOCK_DATA from '../MOCK_DATA';
import { GlobalStyle, DetailContainer, DetailImg, DetailButton } from '../styled/PokemonDetailStyle';



const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState();
    const navigate = useNavigate();

    const handleBackButton = () =>{
        navigate('/dex');
    }

    const getPokemonId = (id) => {
    return MOCK_DATA.find((pokemon) => pokemon.id === Number(id));
};

    useEffect(()=> {
        const fetchPokemon = getPokemonId(id);
        setPokemon(fetchPokemon);
    }, [id])


    return (
        <>
        <GlobalStyle/>
        <DetailContainer>
        <DetailImg src={pokemon?.img_url} alt={pokemon?.korean_name}/>
        <h2>{pokemon?.korean_name}</h2>
        <p>{pokemon?.description}</p>
        <p>타입 : {pokemon?.types.join(", ")}</p>
        <DetailButton onClick={handleBackButton}>뒤로가기</DetailButton>
        </DetailContainer>
    </>
  )
    }
;

export default PokemonDetail