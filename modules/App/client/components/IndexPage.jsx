
import { Component } from 'react';

import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';

export default class IndexPage extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <WelcomeSection />
      </div>
    )
  }

};
