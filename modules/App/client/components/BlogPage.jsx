
import { Component } from 'react';

import NavBar from './NavBar';

export default class BlogPage extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <div>{'This is the blog page.'}</div>
      </div>
    )
  }

};
