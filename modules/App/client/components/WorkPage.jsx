
import { Component } from 'react';

import NavBar from './NavBar';
import ProjectSection from './ProjectSection';
import FooterSection from './FooterSection';

export default class WorkPage extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <ProjectSection isTitleIncluded/>
        <FooterSection />
      </div>
    )
  }

};
