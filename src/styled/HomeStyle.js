import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #FFF5E0;
    }
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HomeImg = styled.img`
    width: 800px;
    height: 300px;
`

export const HomeButton = styled.button`
    background-color: #735026;
    border-color: white;
    color: white;
`