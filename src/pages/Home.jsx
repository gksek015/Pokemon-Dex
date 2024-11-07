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
    background-color: white;
`;

const HomeImg = styled.img`
    width: 800px;
    height: 300px;
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
        <HomeImg src="/pokemon-logo-RN0wntMB.png"/>
        <HomeButton onClick={handleStartButton}>시작하기</HomeButton>
    </HomeContainer>
  )
}

export default Home