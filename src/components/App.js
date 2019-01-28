import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
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
import { setAuthedUser } from '../actions/authedUser';

class App extends Component {
  state = { isLogin: false };

  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  handleUpdateLogin = () => {
    this.setState(prevState => {
      if (prevState.isLogin) {
        this.props.dispatch(setAuthedUser(null));
      }
      return { isLogin: !prevState.isLogin };
    });
  };

  render = () => {
    const { authedUser, users } = this.props;
    const { isLogin } = this.state;

    return (
      <React.Fragment>
        <Nav
          name={
            authedUser && Object.entries(users).length
              ? users[authedUser].name
              : ''
          }
          isLogin={isLogin}
          onLogin={this.handleUpdateLogin}
        />
        <LoadingBar />
        {authedUser && Object.entries(users).length ? (
          <Switch>
            <Route exact path="/" component={Tab} />
            <Route path="/add" component={NewPoll} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/question/:id" component={Poll} />
            <Route
              path="/login"
              render={props => (
                <Login {...props} onLogin={this.handleUpdateLogin} />
              )}
            />
            <Route component={Error} />
          </Switch>
        ) : (
          <Login {...this.props} onLogin={this.handleUpdateLogin} />
        )}
      </React.Fragment>
    );
  };
}

const mapStateToProps = ({ authedUser, users }) => ({ authedUser, users });

export default withRouter(connect(mapStateToProps)(App));
