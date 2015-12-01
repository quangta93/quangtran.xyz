
import { Component } from 'react';

import NavBar from './NavBar';
import FooterSection from './FooterSection';

export default class NotFoundPage extends Component {

  render() {
    return (
      <div>
        <NavBar />

        {'Page not found!'}
        <FooterSection />
      </div>
    )
  }

};
