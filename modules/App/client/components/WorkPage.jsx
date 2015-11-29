
import { Component } from 'react';

import AppHeader from './AppHeader';
import style from '../css/App.import.css';

export default class WorkPage extends Component {

  render() {
    return (
      <div>
        <AppHeader />

        <div>{'This is the work page.'}</div>
      </div>
    )
  }

};
