import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Container,
  Dropdown
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const friendOptions = [
  {
    text: 'Sarah Edo',
    value: 'sarahedo',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
    }
  },
  {
    text: 'Tyler McGinnis',
    value: 'tylermcginnis',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/large/justen.jpg'
    }
  },
  {
    text: 'John Doe',
    value: 'johndoe',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/large/veronika.jpg'
    }
  }
];

class Login extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = () => {
    const { value } = this.state;
    const { dispatch, history, onLogin } = this.props;

    onLogin();
    dispatch(setAuthedUser(value));
    history.push('/');
  };

  render() {
    return (
      <Container style={{ paddingTop: 20 }}>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment>
              <Header as="h2" color="teal" textAlign="center">
                <Image src="https://react.semantic-ui.com/logo.png" /> Would You
                Rather App!
              </Header>
              <Header as="h4" color="teal">
                Please sign in to continue
              </Header>
              <Form size="large" onSubmit={this.handleSubmit}>
                <Dropdown
                  placeholder="Select User"
                  fluid
                  selection
                  options={friendOptions}
                  style={{ marginBottom: 20 }}
                  onChange={this.handleChange}
                />
                <Button color="teal" fluid size="large">
                  Sign In
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default connect()(Login);
