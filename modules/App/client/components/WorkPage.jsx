
import { Component } from 'react';

import NavBar from './NavBar';
import FooterSection from './FooterSection';

export default class WorkPage extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <div>{'This is the work page.'}</div>
        <FooterSection />
      </div>
    )
  }

};
