import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const titlesList = ['Fantastic Beasts: The Crimes of Grindelwald', 'Bohemian Rhapsody', 'Macbeth', 'Aviator', 'We need to talk about Kevin', 'What We Do in the Shadows', 'Revenant', 'Johnny English', 'Shutter Island', 'Pulp Fiction', 'No Country for Old Men', 'Snatch', 'Moonrise Kingdom', 'Seven Years in Tibet', 'Midnight Special', 'War of the Worlds', 'Dardjeeling Limited', 'Orlando', 'Mindhunter', 'Midnight Special'];

const filmInfo = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App titlesList={titlesList} filmTitle={filmInfo.title} filmGenre={filmInfo.genre} filmYear={filmInfo.year} />
  </React.StrictMode>,
  document.getElementById('root'));
