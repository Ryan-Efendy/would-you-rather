import React from 'react';
import {
  Grid,
  Container,
  Header,
  Button,
  Form
} from 'semantic-ui-react';

const NewPoll = () => (
  <Container text>
    <Grid columns={2} centered celled>
      <Header as="h3" textAlign="center" style={{ margin: 10 }}>
        Create New Question
      </Header>
      <Grid.Row>
        <Grid.Column>
          <Header as="h4">Comeplete the question:</Header>
          <Form>
            <Form.Field>
              <Header as="h3">Would you rather...</Header>
              <input placeholder="Enter Option One Here" />
            </Form.Field>
            <Form.Field>
              <Header as="h3" textAlign='center'>OR</Header>
              <input placeholder="Enter Option Two Here" />
            </Form.Field>
            <Button type="submit" fluid>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default NewPoll;
