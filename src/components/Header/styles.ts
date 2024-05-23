import styled from "styled-components";

const breakpoint = '768px'; 

export const LayoutHeader = styled.header` 
  display: block;
  margin: 0.5rem ;
  margin-bottom: -4rem;
  padding: 1.5rem; 
  align-items: center;
  text-align: center;

`;

export const SubContainer = styled.div`
  font-family: "Unbounded", sans-serif;
  font-size: 20px;
  margin-top: 4rem;
  color: white;

  @media (max-width: ${breakpoint}) { 
    font-size: 16px;
  }
`;

export const ImageHeader = styled.img`
    @media (max-width: ${breakpoint}) {
    width: 200px;
    height: 100px;
    }
`;




