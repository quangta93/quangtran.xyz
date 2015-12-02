
import { Component } from 'react';

export default class SkillSection extends Component {

  render() {
    let progressStyle = {
      width: '60%',
    };
    return (
      <div className="container pt">
    		<div className="row mt centered">
    			<div className="col-lg-3">
    				<span className="glyphicon glyphicon-book"></span>
    				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    			</div>

    			<div className="col-lg-3">
    				<span className="glyphicon glyphicon-user"></span>
    				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    			</div>

    			<div className="col-lg-3">
    				<span className="glyphicon glyphicon-fire"></span>
    				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    			</div>

    			<div className="col-lg-3">
    				<span className="glyphicon glyphicon-globe"></span>
    				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    			</div>
    		</div>

    		<div className="row mt">
    			<div className="col-lg-6">
    				<h4>THE THINKING</h4>
    				<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
    			</div>

    			<div className="col-lg-6">
    				<h4>THE SKILLS</h4>
    				Wordpress
    				<div className="progress">
    					<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={progressStyle}>
    						<span className="sr-only">60% Complete</span>
    					</div>
    				</div>

    				Photoshop
    				<div className="progress">
    					<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={progressStyle}>
    						<span className="sr-only">80% Complete</span>
    					</div>
    				</div>

    				HTML + CSS
    				<div className="progress">
    					<div className="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={progressStyle}>
    						<span className="sr-only">95% Complete</span>
    					</div>
    				</div>

    			</div>
    		</div>
    	</div>
    );
  }

}
