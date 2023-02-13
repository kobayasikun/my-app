import { BrowserRouter, Route, Switch} from 'react-router-dom';
import TOP from './top';
import Search from './sarti';
import './App.css';

function App() {
  return(
    <BrowserRouter>

      <Switch>
        <Route exact path="/">
          <TOP />
  </Route>
  <Route exact path="/search">
          <Search />
  </Route>
  </Switch>
  </BrowserRouter>
  );
 }
export default App;
