import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

// pages/_app.js

// Font files can be colocated inside of `pages`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
