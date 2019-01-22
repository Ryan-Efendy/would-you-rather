import React, { Component } from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Question extends Component {
  state = {};

  textTruncate = (str, length = 15) => {
    const ending = '...';
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    }
    return str;
  }

  render() {
    const { question, user, authedUser } = this.props;
    return (
      <Item>
        <Item.Image
          size="tiny"
          src={user.avatarURL}
        />

        <Item.Content>
          <Item.Header as="a">{`${user.name} asked`}</Item.Header>
          <Item.Meta>Would You Rather</Item.Meta>
          <Item.Description>
            {this.textTruncate(question.optionOne.text)}
          </Item.Description>
          <Item.Extra>
            <Button primary floated="right" as={Link} to={`/question/${question.id}`}>
              View Poll
              <Icon name="right chevron" />
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { id }) => ({
  question: questions[id],
  user: users[questions[id].author],
  authedUser
});

export default connect(mapStateToProps)(Question);
