import React from 'react';
import { Container, Grid, List, Input } from 'semantic-ui-react';

export default class F extends React.Component {
  render() {
    return (
      <div className = 'f'>
        <Grid container columns={3} className = 'footer'>
          <Grid.Column>
            NAVIGATION <hr/>
            <List>
              <List.Item>About Us</List.Item>
              <List.Item>Locations</List.Item>
              <List.Item>Employment</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            MAIN MENU <hr/>
            <List>
              <List.Item>Men</List.Item>
              <List.Item>Women</List.Item>
              <List.Item>Kids</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            CONNECT <hr/>
            <List>
              <List.Item>Join our mailing list for updates!</List.Item>
              <List.Item>Sign up to receive our email updates!</List.Item>
              <List.Item><Input inverted action='Join' placeholder='Enter Email'/></List.Item>
              </List>
          </Grid.Column>
        </Grid>
      </div>
  );
  }
}
