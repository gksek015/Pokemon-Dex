import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #FFF5E0;
    }
`;

export const DetailContainer = styled.div`
    text-align: center;
    margin-top: 20px;
`;

export const DetailImg = styled.img`
    width: 200px;
    height: 200px;
`;

export const DetailButton = styled.button`
    background-color: #735026;
    border-radius: 5px;
    color: white;
`