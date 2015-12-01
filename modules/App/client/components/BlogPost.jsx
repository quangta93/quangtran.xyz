
import { Component } from 'react';

import NavBar from './NavBar';
import FooterSection from './FooterSection';

export default class BlogPost extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <div>{'This is the blog post.'}</div>
        <FooterSection />
      </div>
    )
  }

};
