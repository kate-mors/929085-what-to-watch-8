import Main from '../main/main';

type AppProps = {
  titlesList: string[];
}

function App({titlesList}:AppProps): JSX.Element {
  return <Main titlesList={titlesList}/>;
}

export default App;
