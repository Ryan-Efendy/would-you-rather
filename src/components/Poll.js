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
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handdleAnswerQuestion } from '../actions/questions';

class Poll extends Component {
  state = { isAnswered: false };

  componentDidMount = () => {
    const { question, users, authedUser } = this.props;

    if (question && question.id in users[authedUser].answers) {
      this.setState({ isAnswered: true });
    }
  };

  handleChange = (e, { value }) => this.setState({ value });

  handleSubmit = () => {
    const { dispatch, question, authedUser } = this.props;
    const { value } = this.state;

    this.setState({ isAnswered: true });

    dispatch(
      handdleAnswerQuestion({
        qid: question.id,
        answer: value,
        authedUser
      })
    );
  };

  render = () => {
    const { isAnswered, value } = this.state;
    const { question, user } = this.props;

    if (!question && !user) {
      return <Redirect to="/error" />;
    }

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
                  {user.answers[question.id] === 'optionOne' && (
                    <Icon
                      name="check"
                      circular
                      color="green"
                      inverted
                      style={{ marginLeft: 10 }}
                    />
                  )}
                  <Progress
                    value={questionOne}
                    total={total}
                    progress="percent"
                    label={`${questionOne} out of ${total} votes`}
                  />

                  <label>{question.optionTwo.text}</label>
                  {user.answers[question.id] === 'optionTwo' && (
                    <Icon
                      name="check"
                      circular
                      color="green"
                      inverted
                      style={{ marginLeft: 10 }}
                    />
                  )}
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
  question: id in questions ? questions[id] : null,
  users,
  user: id in questions ? users[questions[id].author] : null,
  authedUser
});

export default connect(mapStateToProps)(Poll);
