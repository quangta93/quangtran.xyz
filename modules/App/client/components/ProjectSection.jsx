import { Component, PropTypes } from 'react';

import { PROJECTS } from 'App/client/AppContent';


export default class ProjectSection extends Component {

  renderProjects() {
    return PROJECTS.map(project => project &&
      <div className="col-lg-4">
        <a className="zoom green" href={`/work/${project.title}`}>
          <img className="img-responsive" src={`/img/portfolio/port0${Math.floor((Math.random() * 6) + 1)}.jpg`} alt={project.title} />
        </a>
        <p>{project.title}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="container pt">
        {
          this.props.isTitleIncluded ?
          <div className="row mt">
      			<div className="col-lg-6 col-lg-offset-3 centered">
      				<h3>MY WORK</h3>
      				<hr />
      			</div>
      		</div>
          : ''
        }
    		<div className="row mt centered">
          {this.renderProjects()}
    		</div>
    	</div>
    );
  }

};

ProjectSection.propTypes = {
  isTitleIncluded: PropTypes.bool,
};
