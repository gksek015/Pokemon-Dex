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
    background-color: #C8C8FF;
`

const Home = () => {
    const navigate = useNavigate();

    const handleStartButton = () => {
        navigate("/dex");
    }

  return (
    <HomeContainer>
        <h1>나만의 포켓몬 도감</h1>
        <button onClick={handleStartButton}>시작하기</button>
    </HomeContainer>
  )
}

export default Home