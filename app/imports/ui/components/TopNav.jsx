import React from 'react';
import { Container, Menu, Icon, Dropdown } from 'semantic-ui-react';

export default class TopNav extends React.Component {
  render() {
    return (
      <Container className = 'top-nav'>
        <Menu secondary compact borderless floated ='left'>
          <Menu.Item fitted>
            <Icon name='facebook' />
          </Menu.Item>
          <Menu.Item fitted>
            <Icon name='instagram' />
          </Menu.Item>
          <Menu.Item fitted>
            <Icon name='twitter' />
          </Menu.Item>
          <Menu.Item fitted>
            <Icon name='pinterest' />
          </Menu.Item>
        </Menu>

        <Menu secondary compact borderless floated ='right'>
          <Menu.Item fitted>
            <Icon name='search' />
          </Menu.Item>
          <Menu.Item fitted>
            <Icon name='home' />
          </Menu.Item>
          <Menu.Item fitted>
            <Icon name='user' />
          </Menu.Item>
          <Menu.Item fitted>
            <Icon name='shopping cart' />
            <Dropdown text='MY CART'>
              <Dropdown.Menu>
                <Dropdown.Item text='Empty' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}
