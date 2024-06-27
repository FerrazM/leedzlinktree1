import styled from "styled-components"

const breakpoint = '768px';

export const LayoutFooter = styled.footer`
    margin-left: 1.5rem;
    padding-bottom: -2em;

    @media (max-width: ${breakpoint}) {
    margin-bottom: 5rem;
}    
`

export const ImageFooter = styled.img`
    width: 350px;
    height: 350px;

    @media (max-width: ${breakpoint}) {
    width: 100px;
    height: 100px;
}
`
export const ImageFooterCenter = styled.img`
    width: 350px;
    height: 350px;

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

export const ImageDiv = styled.image`
    display: flex;
    justify-content: flex-end;
    margin-top: -19.7em;
`
export const ImageDivv = styled.image`
    display: flex;
    justify-content: center;
    margin-top: 7rem;
`