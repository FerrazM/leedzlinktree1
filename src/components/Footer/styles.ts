import styled from "styled-components"

const breakpoint = '768px';

export const LayoutFooter = styled.footer`
    margin: 1.5rem;

    @media (max-width: ${breakpoint}) {
    margin-bottom: 5rem;
}    
`

export const ImageFooter = styled.img`
    width: 150px;
    height: 150px;

    @media (max-width: ${breakpoint}) {
    width: 100px;
    height: 100px;
}
`
export const DivFooter = styled.text`
    font-size: 16px;

    @media (max-width: ${breakpoint}) {
    font-size: 12px;
}    
`

export const ImageDiv = styled.footer`
    display: flex;
    justify-content: flex-end;
    margin: 1.5rem;
    margin-top: -10em;
`