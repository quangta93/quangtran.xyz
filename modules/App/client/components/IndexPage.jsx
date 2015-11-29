
import { Component } from 'react';

import AppHeader from './AppHeader';
import WelcomeSection from './WelcomeSection';

export default class IndexPage extends Component {

  render() {
    return (
      <div>
        <AppHeader />

        <WelcomeSection />
      </div>
    )
  }

};
