// import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    body {
        background-color: #FFF5E0;
    }
`;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HomeImg = styled.img`
    width: 800px;
    height: 300px;
`

const HomeButton = styled.button`
    background-color: #735026;
    border-color: white;
    color: white;
`

const Home = () => {
    const navigate = useNavigate();

    const handleStartButton = () => {
        navigate("/dex");
    }

  return (
    <>
    <GlobalStyle/>
    <HomeContainer>
        <HomeImg src="/pokemon-logo-RN0wntMB.png"/>
        <HomeButton onClick={handleStartButton}>시작하기</HomeButton>
    </HomeContainer>
    </>
  )
}

export default Home