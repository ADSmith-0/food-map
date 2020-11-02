import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MapPage from './pageComponents/MapPage';
import SearchPage from './pageComponents/SearchPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={MapPage}/>
          <Route path="/Map" component={MapPage}/>
          <Route path="/Search" component={SearchPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
