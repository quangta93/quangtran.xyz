
import { Component } from 'react';

import AppContent from '../AppContent';

export default class ProjectSection extends Component {

  render() {
    return (
      <div className="container pt">
    		<div className="row mt centered">
    			<div className="col-lg-4">
    				<a className="zoom green" href="work01.html"><img className="img-responsive" src="/img/portfolio/port01.jpg" alt="Project 1" /></a>
    				<p>APE</p>
    			</div>
    			<div className="col-lg-4">
    				<a className="zoom green" href="work01.html"><img className="img-responsive" src="/img/portfolio/port02.jpg" alt="Project 2" /></a>
    				<p>RAIDERS</p>
    			</div>
    			<div className="col-lg-4">
    				<a className="zoom green" href="work01.html"><img className="img-responsive" src="/img/portfolio/port03.jpg" alt="Project 3" /></a>
    				<p>VIKINGS</p>
    			</div>
    		</div>
    		<div className="row mt centered">
    			<div className="col-lg-4">
    				<a className="zoom green" href="work01.html"><img className="img-responsive" src="/img/portfolio/port04.jpg" alt="Project 4" /></a>
    				<p>YODA</p>
    			</div>
    			<div className="col-lg-4">
    				<a className="zoom green" href="work01.html"><img className="img-responsive" src="/img/portfolio/port05.jpg" alt="Project 5" /></a>
    				<p>EMPERORS</p>
    			</div>
    			<div className="col-lg-4">
    				<a className="zoom green" href="work01.html"><img className="img-responsive" src="/img/portfolio/port06.jpg" alt="Project 6" /></a>
    				<p>CHIEFS</p>
    			</div>
    		</div>
    	</div>
    );
  }

};
