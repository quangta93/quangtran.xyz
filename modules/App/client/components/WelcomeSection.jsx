
import { Component } from 'react';

import AppContent from '../AppContent';

export default class WelcomeSection extends Component {

  render() {
    return (
      <div id="ww">
  	    <div className="container">
    			<div className="row">
    				<div className="col-lg-8 col-lg-offset-2 centered">
    					{/*<img src="assets/img/user.png" alt="Stanley">*/}
    					<h1>{AppContent.greeting}</h1>
    					<p>{AppContent.themeIntroduction}</p>
    					<p>{AppContent.subscription}</p>
    				</div>
    			</div>
  	    </div>
    	</div>
    );
  }

};
