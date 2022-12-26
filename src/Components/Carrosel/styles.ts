import styled from 'styled-components';

export const Carrosel = styled.div`
  height: 70vh;
  margin: 0 auto;
  max-width: 96rem;
  margin-top: 10rem;

  @media (max-width: 800px) {
    max-width: 40rem;
    overflow-x: hidden;
    height: 40vh;
  } ;
`;
