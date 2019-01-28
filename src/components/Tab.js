import React from 'react';
import { Tab, Grid, Item, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Question from './Question';

const panes = (unansweredQuestionsIds, answeredQuestionsIds) => [
  {
    menuItem: 'Unanswered Questions',
    render: () => (
      <Item.Group divided>
        {unansweredQuestionsIds.map(id => (
          <Question id={id} key={id} />
        ))}
      </Item.Group>
    )
  },
  {
    menuItem: 'Answered Questions',
    render: () => (
      <Item.Group divided>
        {answeredQuestionsIds.map(id => (
          <Question id={id} key={id} />
        ))}
      </Item.Group>
    )
  }
];

const MyTab = ({ unansweredQuestionsIds, answeredQuestionsIds }) => (
  <Container text style={{ paddingTop: 20 }}>
    <Grid centered>
      <Grid.Column>
        <Tab panes={panes(unansweredQuestionsIds, answeredQuestionsIds)} />
      </Grid.Column>
    </Grid>
  </Container>
);

const mapStateToProps = ({ questions, authedUser }) => ({
  unansweredQuestionsIds: Object.keys(questions)
    .filter(
      id =>
        !questions[id].optionOne.votes.includes(authedUser) &&
        !questions[id].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestionsIds: Object.keys(questions)
    .filter(
      id =>
        questions[id].optionOne.votes.includes(authedUser) ||
        questions[id].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
});

export default connect(mapStateToProps)(MyTab);
