import React from "react";
import { Provider } from 'react-redux';
import { store } from '../stores/map';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
