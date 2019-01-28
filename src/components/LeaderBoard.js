import React from 'react';
import { Item, Grid, Container, Rating, Label, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

const LeaderBoard = ({users}) => users.map((user, i) => (
  <Container text key={user.id}>
    <Grid centered celled>
      <Grid.Row>
        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image
                size="tiny"
                src={user.avatarURL}
              />
              <Item.Content>
                <Item.Header as="a">{user.name}</Item.Header>
                <Rating
                  maxRating={5}
                  defaultRating={5 - i}
                  icon="star"
                  style={{ paddingLeft: 10 }}
                />
                <Item.Description>{`Answered Questions: ${Object.keys(user.answers).length}`}</Item.Description>
                <Item.Description>{`Created Questions: ${user.questions.length}`}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column width={4} textAlign="center" verticalAlign="middle">
          <Header as="h3" color="teal" textAlign="center">Score</Header>
          <Label circular color="teal" size="massive">
            {Object.keys(user.answers).length + user.questions.length}
          </Label>
        </Grid.Column>
        </Grid.Row>
    </Grid>
  </Container>
))

const compare = (a, b) => {
  if (
    Object.keys(a.answers).length + a.questions.length >
    Object.keys(b.answers).length + b.questions.length
  ) {
    return -1;
  }
  if (
    Object.keys(a.answers).length + a.questions.length <
    Object.keys(b.answers).length + b.questions.length
  ) {
    return 1;
  }
  return 0;
};

const mapStateToProps = ({ users }) => ({users: Object.values(users).sort(compare)});

export default connect(mapStateToProps)(LeaderBoard);

// (
//   <Container text>
//     <Grid centered celled>
//       <Grid.Row>
//         <Grid.Column width={12}>
//           <Item.Group>
//             <Item>
//               <Item.Image
//                 size="tiny"
//                 src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
//               />
//               <Item.Content>
//                 <Item.Header as="a">Sarah Edo</Item.Header>
//                 <Rating
//                   maxRating={5}
//                   defaultRating={5}
//                   icon="star"
//                   style={{ paddingLeft: 10 }}
//                 />
//                 <Item.Description>Answered Questions: 7</Item.Description>
//                 <Item.Description>Created Questions: 3</Item.Description>
//               </Item.Content>
//             </Item>
//           </Item.Group>
//         </Grid.Column>
//         <Grid.Column width={4} textAlign="center" verticalAlign="middle">
//           <Label circular color="teal" size="massive">
//             10
//           </Label>
//         </Grid.Column>

//         <Grid.Column width={12}>
//           <Item.Group>
//             <Item>
//               <Item.Image
//                 size="tiny"
//                 src="https://react.semantic-ui.com/images/avatar/large/justen.jpg"
//               />

//               <Item.Content>
//                 <Item.Header as="a">Tyler McGinnis</Item.Header>
//                 <Rating
//                   maxRating={5}
//                   defaultRating={4}
//                   icon="star"
//                   style={{ paddingLeft: 10 }}
//                 />
//                 <Item.Description>Answered Questions: 7</Item.Description>
//                 <Item.Description>Created Questions: 3</Item.Description>
//               </Item.Content>
//             </Item>
//           </Item.Group>
//         </Grid.Column>
//         <Grid.Column width={4} textAlign="center" verticalAlign="middle">
//           <Label circular color="teal" size="massive">
//             10
//           </Label>
//         </Grid.Column>

//         <Grid.Column width={12}>
//           <Item.Group>
//             <Item>
//               <Item.Image
//                 size="tiny"
//                 src="https://react.semantic-ui.com/images/avatar/large/veronika.jpg"
//               />

//               <Item.Content>
//                 <Item.Header as="a">John Doe</Item.Header>
//                 <Rating
//                   maxRating={5}
//                   defaultRating={3}
//                   icon="star"
//                   style={{ paddingLeft: 10 }}
//                 />
//                 <Item.Description>Answered Questions: 7</Item.Description>
//                 <Item.Description>Created Questions: 3</Item.Description>
//               </Item.Content>
//             </Item>
//           </Item.Group>
//         </Grid.Column>
//         <Grid.Column width={4} textAlign="center" verticalAlign="middle">
//           <Label circular color="teal" size="massive">
//             10
//           </Label>
//         </Grid.Column>
//       </Grid.Row>
//     </Grid>
//   </Container>
// );
