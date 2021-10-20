import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

const onActiveCardHover = (id: number) => id;

ReactDOM.render(
  <React.StrictMode>
    <App films={films} onActiveCardHover={onActiveCardHover} />
  </React.StrictMode>,
  document.getElementById('root'));
