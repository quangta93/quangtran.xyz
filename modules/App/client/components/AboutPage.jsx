
import { Component } from 'react';

import NavBar from './NavBar';
import WelcomeSection from './WelcomeSection';
import SkillSection from './SkillSection';
import FooterSection from './FooterSection';

export default class AboutPage extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <WelcomeSection />
        <SkillSection />
        <FooterSection />
      </div>
    )
  }

};
