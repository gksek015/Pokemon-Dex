import styled from "styled-components";

export const CardContainer = styled.div`
    margin-top: 20px;
`

export const Card = styled.div`
display: grid;
grid-gap: 10px;
flex-direction: row;
align-items: center;
justify-content: center;
border: 1px solid #FFF5E0;
border-radius: 5px;
background-color: #DECEAE;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
width: 100px;
text-align: center;
padding: 20px;
margin: 10px;
transform: transform 0.3s, box-shadow 0.3s, background-color 0.3s;

&:hover {
    transform: scale(1.05);
}
`;

export const AddButton = styled.button`
    background-color: #735026;
    color: white;
`