
import { Component } from 'react';


export default class FooterSection extends Component {

  render() {
    return (
      <div id="footer">
    		<div className="container">
    			<div className="row">
    				<div className="col-lg-4">
    					<h4>My Address</h4>
    					<p>
    						5426 Meadowcreek Dr., #2011A<br/>
                +469 231 8107, <br/>
                Dallas, TX 75248.
    					</p>
    				</div>

    				<div className="col-lg-4">
    					<h4>My Links</h4>
    					<p>
    						<a href="https://www.linkedin.com/in/quangta93" target="_blank"><i className="fa fa-inverse fa-linkedin-square fa-2x"/>&nbsp; Linkedin</a><br/>
    						<a href="https://twitter.com/quangta93" target="_blank"><i className="fa fa-inverse fa-twitter-square fa-2x"/>&nbsp; Twitter</a><br/>
    						<a href="https://github.com/quangta93" target="_blank"><i className="fa fa-inverse fa-github-square fa-2x"/>&nbsp; Github</a>
    					</p>
    				</div>

    				<div className="col-lg-4">
    					<h4>About Stanley</h4>
    					<p>This cute theme is created and freely distributed by Stanley Stinson and the <a href="blacktie.co">BlackTie</a> team. Live demo <a href="http://blacktie.co/demo/stanley/">here</a>.</p>
    				</div>

    			</div>

    		</div>
    	</div>
    );
  }

};
