import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../main/main';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MyList from '../my-list/my-list';
import PageNotFound from '../page-not-found/page-not-found';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';

type AppProps = {
  titlesList: string[];
  filmTitle: string;
  filmGenre: string;
  filmYear: number;
}

function App({titlesList, filmTitle, filmGenre, filmYear}:AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            titlesList={titlesList}
            filmTitle={filmTitle}
            filmGenre={filmGenre}
            filmYear={filmYear}
          />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/mylist" exact>
          <MyList />
        </Route>
        <Route path="/films/:id?" exact>
          <Film />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview />
        </Route>
        <Route path="/player/:id" exact>
          <Player />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
