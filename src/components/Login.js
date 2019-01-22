import React from 'react';
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

const friendOptions = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
    }
  },
  {
    text: 'Justen Hess',
    value: 'Justen Hess',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/large/justen.jpg'
    }
  },
  {
    text: 'Veronika Hess',
    value: 'Veronika Hess',
    image: {
      avatar: true,
      src: 'https://react.semantic-ui.com/images/avatar/large/veronika.jpg'
    }
  }
];

const Login = () => (
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
          <Form size="large">
            <Dropdown
              placeholder="Select User"
              fluid
              selection
              options={friendOptions}
              style={{marginBottom: 20}}
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

export default Login;
