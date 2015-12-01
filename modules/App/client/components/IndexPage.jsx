
import { Component } from 'react';

import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';
import ProjectSection from './ProjectSection';
import FooterSection from './FooterSection';

export default class IndexPage extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <WelcomeSection />
        <ProjectSection />
        <FooterSection />
      </div>
    )
  }

};
