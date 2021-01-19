import React from 'react';
// Providers
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
// Values
import store from '../store';
import theme from '../theme/muiTheme';

const App = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
};

export default App;
