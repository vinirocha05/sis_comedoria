import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Tenez';
  src: url('/assets/Tenez-Italic.otf');
  font-weight: 400;
  font-style: normal;
}

*{
  outline: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  scroll-padding-top:15rem;



  /* width */
::-webkit-scrollbar {
  width: 10px;
  border-radius: 1rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.colors.white}
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.colors.dark};
  border-radius: .5rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

}

html{
  font-size: 62.5%;
}

body {
    font-family: 'Tenez', sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
  }

  a{
    text-decoration: none;
    color: inherit
  }
`;
