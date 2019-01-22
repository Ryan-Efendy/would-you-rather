import React from 'react';
import { Item, Grid, Container, Rating, Label } from 'semantic-ui-react';

const LeaderBoard = () => (
  <Container text>
    <Grid centered celled>
      <Grid.Row>
        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
              />
              <Item.Content>
                <Item.Header as="a">Sarah Edo</Item.Header>
                <Rating
                  maxRating={5}
                  defaultRating={5}
                  icon="star"
                  style={{ paddingLeft: 10 }}
                />
                <Item.Description>Answered Questions: 7</Item.Description>
                <Item.Description>Created Questions: 3</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4} textAlign="center" verticalAlign="middle">
          <Label circular color="teal" size="massive">
            10
          </Label>
        </Grid.Column>

        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                src="https://react.semantic-ui.com/images/avatar/large/justen.jpg"
              />

              <Item.Content>
                <Item.Header as="a">Tyler McGinnis</Item.Header>
                <Rating
                  maxRating={5}
                  defaultRating={4}
                  icon="star"
                  style={{ paddingLeft: 10 }}
                />
                <Item.Description>Answered Questions: 7</Item.Description>
                <Item.Description>Created Questions: 3</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4} textAlign="center" verticalAlign="middle">
          <Label circular color="teal" size="massive">
            10
          </Label>
        </Grid.Column>

        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                src="https://react.semantic-ui.com/images/avatar/large/veronika.jpg"
              />

              <Item.Content>
                <Item.Header as="a">John Doe</Item.Header>
                <Rating
                  maxRating={5}
                  defaultRating={3}
                  icon="star"
                  style={{ paddingLeft: 10 }}
                />
                <Item.Description>Answered Questions: 7</Item.Description>
                <Item.Description>Created Questions: 3</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4} textAlign="center" verticalAlign="middle">
          <Label circular color="teal" size="massive">
            10
          </Label>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default LeaderBoard;
