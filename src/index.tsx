import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const OFFERS_COUNT: number = 5;

root.render(
  <React.StrictMode>
    <App props={OFFERS_COUNT}/>
  </React.StrictMode>
);
