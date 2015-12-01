
import { Component } from 'react';

import NavBar from './NavBar';

export default class BlogPost extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <div>{'This is the blog post.'}</div>
      </div>
    )
  }

};
