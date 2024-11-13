import styled from "styled-components";

export const DashboardContainer = styled.div`
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

export const Title = styled.h2`
    color: #735026;
    font-size: 24px;
    margin-bottom: 20px;
`;

export const InsideCard = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-bottom: 20px;
`;

export const Inside = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #735026;
    border-radius: 5px;
`;

export const PokeBall = styled.img`
    width: 40px;
    height: 40px;
`;

export const CardContainer = styled.div`
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

export const PokemonImg = styled.img`
    width: 100px;
    height: 100px;
`;

export const PokemonName = styled.h4`
    color: #735026;
    margin-bottom: 20px;
`;

export const RemoveButton = styled.button`
    background-color: #735026;
    color: white;
    width: 80px;
`;

