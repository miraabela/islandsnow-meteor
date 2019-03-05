import React from 'react';
import { Container, Menu, Dropdown } from 'semantic-ui-react';

export default class BottomNav extends React.Component {
  render() {
    return (
      <Container align="center" className = 'bottom-nav'>
        <Menu secondary compact borderless>
          <Menu.Item>
            <Dropdown text='MEN'>
              <Dropdown.Menu>
                <Dropdown.Item text='TOPS' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            <Dropdown text='WOMEN'>
              <Dropdown.Menu>
                <Dropdown.Item text='TOPS' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>


            <Dropdown text='KIDS'>
              <Dropdown.Menu>
                <Dropdown.Item text='TOPS' />
              </Dropdown.Menu>
            </Dropdown>

          </Menu.Item>
          <Menu.Item>
            <Dropdown text='BRANDS'>
              <Dropdown.Menu>
                <Dropdown.Item text='TOPS' />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item>
            SALE
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}
