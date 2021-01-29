import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Menu from './components/Menu'

import SiteTitle from './SiteTitle';
import IdeaList from './IdeaList';
import MetadataCall from './MetadataCall';
import Weather from './Weather';

function App() {

  return (
    <Router>
    <Menu />
      <div class="container">
          
          <SiteTitle />
          
          <Switch>
            <Route path="/ideas">
              <IdeaList />
            </Route>
            <Route path="/metadata">
              <MetadataCall />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>
            <Route path="/">
              <h1>Home Page</h1>
            </Route>
          </Switch>
  
          
      </div>
    </Router>
  );
}

export default App;
      