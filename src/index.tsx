import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/app/app.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { checkAuthAction, fetchOffersAction } from './api/api-actions.ts';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
