
import { Component } from 'react';

import AppHeader from './AppHeader';
import style from '../css/App.import.css';

export default class ContactPage extends Component {

  render() {
    return (
      <div>
        <AppHeader />

        <div>{'This is the contact page.'}</div>
      </div>
    )
  }

};
