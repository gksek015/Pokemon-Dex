// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalStyle, HomeContainer, HomeImg, HomeButton } from '../styled/HomeStyle';

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