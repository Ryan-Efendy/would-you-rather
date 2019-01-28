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
import { setAuthedUser } from '../actions/authedUser';

class App extends Component {
  state = { isLogin: false, activeItem: 'home' };

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

  handleActiveClick = (e, { name }) => this.setState({ activeItem: name });

  handleNavChange = activeItem => this.setState({ activeItem });

  render = () => {
    const { authedUser, users } = this.props;
    const { isLogin, activeItem } = this.state;

    return (
      <React.Fragment>
        <Nav
          name={
            authedUser && Object.entries(users).length
              ? users[authedUser].name
              : ''
          }
          activeItem={activeItem}
          isLogin={isLogin}
          onLogin={this.handleUpdateLogin}
          onActiveChange={this.handleActiveClick}
        />
        <LoadingBar />
        {authedUser && Object.entries(users).length ? (
          <Switch>
            <Route exact path="/" component={Tab} />
            <Route path="/add" render={props => (
                <NewPoll {...props} onNavChange={this.handleNavChange} />
              )} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/question/:id" component={Poll} />
            <Route
              path="/login"
              render={props => (
                <Login {...props} onLogin={this.handleUpdateLogin} onNavChange={this.handleNavChange} />
              )}
            />
            <Route component={Error} />
          </Switch>
        ) : (
          <Login {...this.props} onLogin={this.handleUpdateLogin} onNavChange={this.handleNavChange} />
        )}
      </React.Fragment>
    );
  };
}

const mapStateToProps = ({ authedUser, users }) => ({ authedUser, users });

export default withRouter(connect(mapStateToProps)(App));
