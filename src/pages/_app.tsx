import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

// pages/_app.js
import localFont from '@next/font/local';

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './fonts/Tenez-Italic.otf' });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <main className={myFont.className}>
          <Component {...pageProps} />
        </main>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
