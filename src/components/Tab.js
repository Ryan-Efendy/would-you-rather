import React from 'react';
import { Tab, Grid, Item, Button, Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Question from './Question';

const panes = ids => [
  {
    menuItem: 'Unanswered Questions',
    render: () => (
      <Item.Group divided>
        {ids.map(id => (
          <Question id={id} key={id} />
        ))}
      </Item.Group>
    )
  },
  {
    menuItem: 'Answered Questions',
    render: () => (
      <Item.Group divided>
        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
          />

          <Item.Content>
            <Item.Header as="a">Foo asked</Item.Header>
            <Item.Meta>Would You Rather</Item.Meta>
            <Item.Description />
            <Item.Extra>
              Additional Details
              <Button primary floated="right" as={Link} to="/question">
                View Poll
                <Icon name="right chevron" />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
];

const MyTab = ({ questionsIds }) => (
    <Container text style={{ paddingTop: 20 }}>
      <Grid centered>
        <Grid.Column>
          <Tab panes={panes(questionsIds)} />
        </Grid.Column>
      </Grid>
    </Container>
  );

const mapStateToProps = ({ questions }) => ({
  questionsIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  )
});

export default connect(mapStateToProps)(MyTab);
