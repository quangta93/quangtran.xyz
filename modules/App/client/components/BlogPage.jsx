
import { Component } from 'react';

import NavBar from './NavBar';
import FooterSection from './FooterSection';

export default class BlogPage extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <div>{'This is the blog page.'}</div>
        <FooterSection />
      </div>
    )
  }

};
