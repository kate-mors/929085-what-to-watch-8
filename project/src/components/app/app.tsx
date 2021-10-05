import Main from '../main/main';

type AppProps = {
  titlesList: string[];
  filmTitle: string;
  filmGenre: string;
  filmYear: number;
}

function App({titlesList, filmTitle, filmGenre, filmYear}:AppProps): JSX.Element {
  return <Main titlesList={titlesList} filmTitle={filmTitle} filmGenre={filmGenre} filmYear={filmYear} />;
}

export default App;
