import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        align-items: center;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['purple']};
    }
    
    body {
        color: ${props => props.theme['gray-300']}
    }

    body, input, textarea, button {
        font-family: "Darker Grotesque", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        background: linear-gradient(81deg, #0b0619, #8a25f9, #c11c86);
    }
`;