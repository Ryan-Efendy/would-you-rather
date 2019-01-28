import React from 'react';
import { Menu, Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nav = ({ name, isLogin, onLogin, activeItem, onActiveChange }) => (
    <Container>
      <Menu size="large" pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home' || activeItem === '/'}
          onClick={onActiveChange}
          as={Link}
          to="/"
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="newQuestion"
          active={activeItem === 'newQuestion' || activeItem === '/add'}
          onClick={onActiveChange}
          as={Link}
          to="/add"
        >
          New Question
        </Menu.Item>

        <Menu.Item
          name="leaderBoard"
          active={activeItem === 'leaderBoard' || activeItem === '/leaderboard'}
          onClick={onActiveChange}
          as={Link}
          to="/leaderboard"
        >
          Leader Board
        </Menu.Item>

        {isLogin && (
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon name="user" />
              {`Hello ${name}`}
            </Menu.Item>
            <Menu.Item
              name="logout"
              onClick={onLogin}
            />
          </Menu.Menu>
        )}
      </Menu>
    </Container>
  );

export default Nav;
