import '@fontsource/roboto';

import React from 'react';

import Head from 'next/head';
import { AppProps } from 'next/app';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../theme';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Imersão Full Cycle 3 - Desafio 3</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <Container>
          <Box marginTop={3}>
            <Component {...pageProps} />
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}