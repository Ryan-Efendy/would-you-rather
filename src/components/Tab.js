import React from 'react';
import { Tab, Grid, Item, Button, Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const panes = [
  {
    menuItem: 'Unanswered Quetsions',
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
              <Button primary floated="right" as={Link} to='/question'>
                View Poll
                <Icon name="right chevron" />
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/avatar/large/justen.jpg"
          />

          <Item.Content>
            <Item.Header as="a">Bar asked</Item.Header>
            <Item.Meta>Would You Rather</Item.Meta>
            <Item.Description />
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image
            size="tiny"
            src="https://react.semantic-ui.com/images/avatar/large/veronika.jpg"
          />

          <Item.Content>
            <Item.Header as="a">Baz asked</Item.Header>
            <Item.Meta>Would You Rather</Item.Meta>
            <Item.Description />
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
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
              <Button primary floated="right" as={Link} to='/question'>
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

const MyTab = () => (
  <Container text style={{ paddingTop: 20 }}>
    <Grid centered >
      <Grid.Column>
        <Tab panes={panes} />
      </Grid.Column>
    </Grid>
  </Container>
);

export default MyTab;
