// import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #8C8CFF;
`;

const Title = styled.h1`
    font-size: 50px;
`

const HomeButton = styled.button`
    background-color: #C8C8FF;
    border-color: white;
`

const Home = () => {
    const navigate = useNavigate();

    const handleStartButton = () => {
        navigate("/dex");
    }

  return (
    <HomeContainer>
        <Title>나만의 포켓몬 도감</Title>
        <HomeButton onClick={handleStartButton}>시작하기</HomeButton>
    </HomeContainer>
  )
}

export default Home