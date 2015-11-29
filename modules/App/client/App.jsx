
import { Component } from 'react';

import NavBar from './components/NavBar';
import style from './css/App.import.css';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <div>{'This is the main container.'}</div>
      </div>
    )
  }

};
