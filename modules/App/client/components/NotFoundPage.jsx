
import { Component } from 'react';

import NavBar from './NavBar';
import FooterSection from './FooterSection';

export default class NotFoundPage extends Component {

  render() {
    return (
      <div>
        <NavBar />

        <div style={{textAlign: "center", margin: "4em auto"}}>
          <h3>The page you are looking for doesn't exist!</h3>
          <hr style={{width: "40%", margin: ".3em auto 2em"}} />
          <p>Don't be upset or you might look like &hellip;</p>
          <img src="/img/404.gif" alt="404" />
        </div>

        <FooterSection />
      </div>
    )
  }

};
