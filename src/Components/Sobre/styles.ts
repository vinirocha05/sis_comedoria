import styled from 'styled-components';

export const Content = styled.section`
  height: 60vh;
  margin: 0 auto;
  max-width: 96rem;
  margin-top: 15rem;

  @media (max-width: 800px) {
    max-width: 35rem;
    margin-top: 5rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.superlarge};
  }
  p {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    img {
      order: -1;
      max-width: 40rem;
    }
  }
`;
