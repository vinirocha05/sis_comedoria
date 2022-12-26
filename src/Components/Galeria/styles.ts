import styled from 'styled-components';

export const Content = styled.section`
  margin: 8rem auto;
  max-width: 96rem;

  @media (max-width: 800px) {
    margin-top: 20rem;
    max-width: 35rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.superlarge};
  }

  span {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin-top: 2rem;
  gap: 10rem;

  align-items: center;

  img {
    max-height: 20rem;
    transition: all ease-in-out 500ms;
  }

  img:hover {
    transform: scale(1.1);
  }
`;
