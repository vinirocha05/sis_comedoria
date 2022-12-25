import styled from 'styled-components';

export const Carrosel = styled.div`
  height: 100vh;
  margin: 0 auto;
  max-width: 96rem;
  margin-top: 10rem;
  img {
    height: 100%;
  }

  button.rec-dot {
    background-color: ${({ theme }) => theme.colors.dark};
    box-shadow: 0 0 1px 3px #eee;
  }

  button.rec-dot:hover,
  button.rec-dot:active,
  button.rec-dot:focus {
    box-shadow: 0 0 1px 3px rgba(7, 26, 43, 0.5);
  }

  .rec.rec-arrow {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
  }

  .rec.rec-arrow:hover {
    background-color: rgba(7, 26, 43, 0.5);
  }
`;
