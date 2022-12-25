import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 80vh;

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes.superlarge};
    color: ${({ theme }) => theme.colors.white};
  }
  p {
    font-size: ${({ theme }) => theme.fonts.sizes.large};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 110rem;
  margin: 5rem auto;
  padding-top: 5rem;
  gap: 5rem;

  iframe {
    height: 50rem;
    width: 50rem;
  }

  .redes-sociais {
    ul {
      display: flex;
      flex-direction: column;
      align-items: left;
      list-style: none;
      img {
        height: 2rem;
      }
    }
    ul li {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fonts.sizes.medium};
      margin-top: 5rem;
      align-items: center;
      display: flex;
      cursor: pointer;
      a {
        margin-left: 2rem;
      }
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    max-width: 35rem;
    margin: 0 auto;

    iframe {
      height: 20rem;
      width: 20rem;
    }
  }
`;
