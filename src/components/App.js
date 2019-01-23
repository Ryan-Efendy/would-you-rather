import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
    const { loading } = this.props;

    return (
      <React.Fragment>
        <Nav />
        {loading === true ? null : (
          <Switch>
            <Route exact path="/" component={Tab} />
            <Route path="/add" component={NewPoll} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/question/:id" component={Poll} />
            <Route component={Error} />
            {/* <Login /> */}
          </Switch>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
});

export default withRouter(connect(mapStateToProps)(App));
