
import { Component } from 'react';

import AppHeader from './AppHeader';
import style from '../css/App.import.css';

export default class AboutPage extends Component {

  render() {
    return (
      <div>
        <AppHeader />

        <div>{'This is the about page.'}</div>
      </div>
    )
  }

};
