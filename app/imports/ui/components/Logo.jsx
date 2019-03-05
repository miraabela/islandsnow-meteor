import React from 'react';
import { Image } from 'semantic-ui-react';

export default class Logo extends React.Component {
  render() {
    return (
      <Container>
        <Image centered
               src='https://cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png'
               size='medium' />
      </Container>
    );
  }
}
