import App from './App';
import ReactDOM from 'react-dom';
import 'src/utils/chart';
import * as serviceWorker from './serviceWorker';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Globalstyle } from 'src/fonts/GlobalStyle';

import 'nprogress/nprogress.css';
import { SidebarProvider } from './contexts/SidebarContext';

import { createStore } from 'redux'
import { Provider } from 'react-redux';
import DataReducer  from './reducer/dataReducer';


const store = createStore(DataReducer);




ReactDOM.render(
  <HelmetProvider>
    <SidebarProvider>
      <BrowserRouter>
        <Globalstyle />
        <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    </SidebarProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
