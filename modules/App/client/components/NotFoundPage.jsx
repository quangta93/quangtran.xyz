
import { Component } from 'react';

import NavBar from './NavBar';

export default class NotFoundPage extends Component {

  render() {
    return (
      <div>
        <NavBar />
        
        {'Page not found!'}
      </div>
    )
  }

};
