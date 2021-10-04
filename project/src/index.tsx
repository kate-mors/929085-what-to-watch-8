import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const titlesList = ['Fantastic Beasts: The Crimes of Grindelwald', 'Bohemian Rhapsody', 'Macbeth', 'Aviator', 'We need to talk about Kevin', 'What We Do in the Shadows', 'Revenant', 'Johnny English', 'Shutter Island', 'Pulp Fiction', 'No Country for Old Men', 'Snatch', 'Moonrise Kingdom', 'Seven Years in Tibet', 'Midnight Special', 'War of the Worlds', 'Dardjeeling Limited', 'Orlando', 'Mindhunter', 'Midnight Special'];

const FilmInfo = {
  FILM_TITLE: 'The Grand Budapest Hotel',
  FILM_GENRE: 'Drama',
  FILM_YEAR: 2014,
}

ReactDOM.render(
  <React.StrictMode>
    <App titlesList={titlesList} filmTitle={FilmInfo.FILM_TITLE} filmGenre={FilmInfo.FILM_GENRE} filmYear={FilmInfo.FILM_YEAR} />
  </React.StrictMode>,
  document.getElementById('root'));
