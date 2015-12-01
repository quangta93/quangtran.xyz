
import { Component } from 'react';

import NavBar from './NavBar';

export default class AboutPage extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <div>{'This is the about page.'}</div>
      </div>
    )
  }

};
