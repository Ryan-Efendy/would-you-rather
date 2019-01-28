import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav';
import Tab from './Tab';
import Poll from './Poll';
import NewPoll from './NewPoll';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import Error from './Error';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  render = () => {
    const { authedUser, users } = this.props;

    return (
      <React.Fragment>
        <Nav authedUser={authedUser} name={authedUser && Object.entries(users).length ? users[authedUser].name : ''}/>
        <LoadingBar/>
        {(authedUser && Object.entries(users).length)  && (
          <Switch>
            <Route exact path="/" component={Tab} />
            <Route path="/add" component={NewPoll} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/question/:id" component={Poll} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        )}
      </React.Fragment>
    );
  };
}

const mapStateToProps = ({ authedUser, users }) => ({authedUser, users})

export default withRouter(connect(mapStateToProps)(App));
