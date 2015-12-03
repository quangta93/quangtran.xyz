
import { Component } from 'react';

import {GREETING, INTRODUCTION} from 'App/client/AppContent';

export default class WelcomeSection extends Component {

  render() {
    return (
      <div id="ww">
  	    <div className="container">
    			<div className="row">
    				<div className="col-lg-8 col-lg-offset-2 centered">
    					<img src="/img/user.png" alt="Quang Tran" />
    					<h1>{GREETING}</h1>
    					<p>{INTRODUCTION}</p>
    				</div>
    			</div>
  	    </div>
    	</div>
    );
  }

};
