import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Tab from './Tab';
import Poll from './Poll';
import NewPoll from './NewPoll';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import Error from './Error';

const App = () => (
  <React.Fragment>
    <Nav />
    <Switch>
      <Route exact path="/" component={Tab} />
      <Route path="/add" component={NewPoll} />
      <Route path="/leaderboard" component={LeaderBoard} />
      <Route path="/question" component={Poll} />
      <Route component={Error} />
      {/* <Login /> */}
    </Switch>
  </React.Fragment>
);

export default App;
