import React from 'react';
import TopNav from '../components/TopNav';
import Logo from '../components/Logo';
import BottomNav from '../components/BottomNav';
import Page from '../components/Page';
import F from '../components/F';

export default class IslandSnow extends React.Component {

  render() {
    return (
      <div>
        <Logo />
        <BottomNav />
        <Page />
      </div>
    );
  }
}
