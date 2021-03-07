import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import muiTheme from '../theme/muiTheme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import emotionTheme from '../theme/emotionTheme';

const App = ({ Component, pageProps }: AppProps) => (
    <MuiThemeProvider theme={muiTheme}>
        <EmotionThemeProvider theme={emotionTheme}>
            <Component {...pageProps} />
        </EmotionThemeProvider>
    </MuiThemeProvider>
);
export default App;
