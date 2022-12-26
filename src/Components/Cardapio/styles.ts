import styled from 'styled-components';

export const Content = styled.section`
  height: 60vh;
  margin: 0 auto;
  max-width: 96rem;
  margin-top: 8rem;

  @media (max-width: 800px) {
    margin-top: 40rem;
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
  grid-template-columns: 1fr 1fr;
  height: 70%;

  align-items: center;

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
  }

  .cardapio {
    display: flex;
    flex-direction: column;
    a {
      background-color: ${({ theme }) => theme.colors.dark};
      padding: 5px 10px;
      color: ${({ theme }) => theme.colors.white};
      border-radius: 7px;
      font-size: ${({ theme }) => theme.fonts.sizes.medium};
      height: 5rem;
      max-width: 20rem;
      text-align: center;
      margin-top: 2rem;
      transition: all ease-in 500ms;
    }

    a:hover {
      background-color: rgba(7, 26, 43, 0.5);
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;

    img {
      order: -1;
      max-width: 35rem;
    }
  }
`;
