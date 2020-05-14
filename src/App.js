import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CovidLiveStatsPage from './pages/CovidLiveStatsPage';
import CovidLocationPage from './pages/CovidLocationPage';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Switch>
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/" component={HomePage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/covidlivestats" component={CovidLiveStatsPage} />
          <Route onUpdate={window.scrollTo(0, 0)} exact path="/covidlocation" component={CovidLocationPage} />
      </Switch>
    </div>
  );
}

export default App;