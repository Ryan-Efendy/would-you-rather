import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
  // state = {  }

  componentDidMount = () => {
    this.props.dispatch(handleInitialData());
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        {this.props.loading === true ? null : (
          <Switch>
            <Route exact path="/" component={Tab} />
            <Route path="/add" component={NewPoll} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/question" component={Poll} />
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

export default connect(mapStateToProps)(App);
