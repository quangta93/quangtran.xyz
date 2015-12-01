
import { Component } from 'react';

import NavBar from './NavBar';
import FooterSection from './FooterSection';

export default class ContactPage extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <div>{'This is the contact page.'}</div>
        <FooterSection />
      </div>
    )
  }

};
