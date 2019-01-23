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
  state = { isAnswered: false };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = () => this.setState({ isAnswered: true });

  render = () => {
    const { value, isAnswered } = this.state;
    const { question, user } = this.props;

    const questionOne = question.optionOne.votes.length;
    const questionTwo = question.optionTwo.votes.length;
    const total = questionOne + questionTwo;

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
              {!isAnswered ? (
                <React.Fragment>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group grouped>
                      <Header as="h3">Would You Rather</Header>
                      <Form.Radio
                        label={question.optionOne.text}
                        value="optionOne"
                        checked={value === 'optionOne'}
                        onChange={this.handleChange}
                      />
                      <Form.Radio
                        label={question.optionTwo.text}
                        value="optionTwo"
                        checked={value === 'optionTwo'}
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                  </Form>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Header as="h3">Result</Header>
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
                    value={questionOne}
                    total={total}
                    progress="percent"
                    label={`${questionOne} out of ${total} votes`}
                  />

                  <label>{question.optionTwo.text}</label>
                  <Progress
                    value={questionTwo}
                    total={total}
                    progress="percent"
                    label={`${questionTwo} out of ${total} votes`}
                  />
                </React.Fragment>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  };
}

const mapStateToProps = (
  { authedUser, users, questions },
  {
    match: {
      params: { id }
    }
  }
) => ({
  question: questions[id],
  user: users[questions[id].author]
});

export default connect(mapStateToProps)(Poll);
