import React, { Component } from 'react';
import {
  Image,
  Grid,
  Container,
  Header,
  Form,
  Progress,
  Icon,
  Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Poll extends Component {
  state = { isAnswered: true };

  handleChange = (e, { value }) => this.setState({ value });

  // answered
  render = () => {
    debugger;
    const { value, isAnswered } = this.state;
    const {question, user} = this.props;

    return (
      <Container text>
        <Grid centered celled>
          <Header as="h3" textAlign="center" style={{ margin: 10 }}>
            {isAnswered ? `Asked by ${user.name}` : `${user.name} asks`}
          </Header>

          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={user.avatarURL} />
            </Grid.Column>
            <Grid.Column width={12}>
              {isAnswered ? (
                <React.Fragment>
                  <Header as="h4">Result</Header>
                  <label>{question.optionOne.text}</label>
                  {/* todo: styled component? */}
                  <Icon
                    name="check"
                    circular
                    color="green"
                    inverted
                    style={{ marginLeft: 10 }}
                  />
                  <Progress
                    value="4"
                    total="5"
                    progress="percent"
                    label="2 out of 3 votes"
                  />

                  <label>{question.optionTwo.text}</label>
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
                        label={question.optionOne.text}
                        value="one"
                        checked={value === 'one'}
                        onChange={this.handleChange}
                      />
                      <Form.Radio
                        label={question.optionTwo.text}
                        value="two"
                        checked={value === 'two'}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Button as={Link} to="/">
                      Submit
                    </Button>
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

const mapStateToProps = ({ authedUser, users, questions }, {match: {params: {id}}}) => ({
  question: questions[id],
  user: users[questions[id].author],
});

export default connect(mapStateToProps)(Poll);
