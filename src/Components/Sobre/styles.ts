import styled from 'styled-components';

export const Content = styled.section`
  height: 60vh;
  margin: 0 auto;
  max-width: 96rem;
  margin-top: 15rem;

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.superlarge};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
  }
`;
