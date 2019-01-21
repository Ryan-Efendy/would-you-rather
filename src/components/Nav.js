import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default class Nav extends Component {
  state = {
    activeItem : "home"
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="large">
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="newQuestion"
          active={activeItem === 'newQuestion'}
          onClick={this.handleItemClick}
        >
          New Question
        </Menu.Item>

        <Menu.Item
          name="leaderBoard"
          active={activeItem === 'leaderBoard'}
          onClick={this.handleItemClick}
        >
          Leader Board
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Icon name="user" />
            Hello Foo
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
