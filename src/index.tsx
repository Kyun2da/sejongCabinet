import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme,
} from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { store } from './redux/store';

const theme = unstable_createMuiStrictModeTheme();

/* NOTE: github page 배포 url 참조를 위해 PUBLIC_URL추가 */
ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
