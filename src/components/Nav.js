import React, { Component } from 'react';
import { Menu, Icon, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  state = {
    activeItem : ""
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render = () => {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu size="large" pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === ''}
          onClick={this.handleItemClick}
          as={Link} to='/'
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="newQuestion"
          active={activeItem === 'new'}
          onClick={this.handleItemClick}
          as={Link} to='/add'
        >
          New Question
        </Menu.Item>

        <Menu.Item
          name="leaderBoard"
          active={activeItem === 'leaderboard'}
          onClick={this.handleItemClick}
          as={Link} to='/leaderboard'
        >
          Leader Board
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Icon name="user"/>
            Hello Foo
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
      </Container>
    );
  }
}
