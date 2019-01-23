import React, { Component } from 'react';
import {
  Image,
  Grid,
  Container,
  Header,
  Form,
  Progress,
  Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Poll extends Component {
  state = { isAnswered: false };

  handleChange = (e, { value }) => this.setState({ value });

  // answered
  render = () => {
    const { value, isAnswered } = this.state;
    console.log(this.props);
    debugger;
    return (
      <Container text>
        <Grid centered celled>
          <Header as="h3" textAlign="center" style={{ margin: 10 }}>
            {isAnswered ? 'Asked by Foo Bar' : 'Foo Bar asks'}
          </Header>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg" />
            </Grid.Column>
            <Grid.Column width={12}>
              {isAnswered ? (
                <React.Fragment>
                  <Header as="h4">Result</Header>
                  <label>Would you rather X:</label>
                  {/* todo: styled component? */}
                  <Icon
                    name="check"
                    circular
                    color="green"
                    // size="large"
                    inverted
                    style={{ marginLeft: 10 }}
                  />
                  <Progress
                    value="4"
                    total="5"
                    progress="percent"
                    label="2 out of 3 votes"
                  />

                  <label>Would you rather Y:</label>
                  <Progress
                    value="1"
                    total="5"
                    progress="percent"
                    label="1 out of 3 votes"
                  />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Form>
                    <Form.Group grouped>
                      <label>Would You Rather</label>
                      <Form.Radio
                        label="Small"
                        value="sm"
                        checked={value === 'sm'}
                        onChange={this.handleChange}
                      />
                      <Form.Radio
                        label="Medium"
                        value="md"
                        checked={value === 'md'}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Button as={Link} to="/">
                      Submit
                    </Form.Button>
                  </Form>
                </React.Fragment>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  };
}

export default Poll;
