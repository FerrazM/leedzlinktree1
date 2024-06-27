import styled from "styled-components";

const breakpoint = '768px'; 

export const LayoutHeader = styled.header`
  position: relative;
  display: block;
  margin: 0.5rem ;
  margin-bottom: -4rem;
  padding: 2rem; 
  align-items: center;
  text-align: center;
  overflow: hidden;

`;

export const SubContainer = styled.div`
  font-family: "Unbounded", sans-serif;
  font-size: px;
  margin-top: 1.5rem;
  color: white;

  @media (max-width: ${breakpoint}) { 
    font-size: 16px;
  }
`;

export const ImageHeader = styled.img`
    @media (max-width: ${breakpoint}) {
    width: 100%;
    height: auto;
    
    }
`;
