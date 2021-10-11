import React from 'react';
import CSS from 'csstype';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function PageNotFound(): JSX.Element {
  const containerStyleProperty: CSS.Properties = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontSize: '22px',
    lineHeight: '26px',
    color: '#dfcf77',
    backgroundImage: 'linear-gradient(-180deg,#180202 0,#000 100%)',
  };

  const buttonStyleProperty: CSS.Properties = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'inherit',
    fontSize: '22px',
    lineHeight: '26px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#dfcf77',
    cursor: 'pointer',
  };

  return (
    <>
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
      </header>

      <div className="page-not-found" style={containerStyleProperty}>
        <h2>404. Page not found.</h2>
        <Link to={AppRoute.Main} className="page-not-found" style={buttonStyleProperty}>
          Вернуться на главную
        </Link>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </>
  );
}

export default PageNotFound;
