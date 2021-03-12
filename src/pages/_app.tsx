import { useState } from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import ThemeProvider, { themes } from '@lib/theme';
import store from '../redux/store';
import '../../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, updateTheme] = useState('light');
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    updateTheme(newTheme);
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes[theme]}>
        <Component {...pageProps} updateTheme={toggleTheme} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
