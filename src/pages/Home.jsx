// import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const handleStartButton = () => {
        navigate("/dex");
    }

  return (
    <div>
        <h1>나만의 포켓몬 도감</h1>
        <button onClick={handleStartButton}>시작하기</button>
    </div>
  )
}

export default Home