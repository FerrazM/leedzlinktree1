import { styled } from "styled-components";

const breakpoint = '768px';

export const LayoutLinks = styled.div`
    display: center;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    align-content: center;

    @media (max-width: ${breakpoint}) {
    padding: 0.5rem;
    }
`;  

export const StyledLink = styled.a`
    text-decoration: none;
    margin-bottom: 1.5rem; 
    text-align: center;
    border: solid 1px white;
    width: 60vw;
    height: 8vh;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    display: flex;
    position: relative;
    font-weight: 900;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    margin: 4vh auto;

    background-size: 300% 300%;
    transition: background-position 1s ease;

    @media (max-width: ${breakpoint}) {
        width: 78vw;
    }
    

    &:hover {
        background-position: 80% 10%;  
        background-image: linear-gradient(-90deg, #0b0619, #8a25f9, #c11c86);
    }
`;

