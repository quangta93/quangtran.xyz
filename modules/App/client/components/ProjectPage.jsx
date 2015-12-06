import { Component } from 'react';

import NavBar from './NavBar';
import FooterSection from './FooterSection';

import { PROJECTS } from 'App/client/AppContent';


export default class ProjectPage extends Component {

  render() {
    let project = PROJECTS.find(project => project && project.title === this.props.params.title);

    return (
      <div>
        <NavBar />

        {
          !!(project) ?
          <div className="container pt">
            <div className="row mt">
              <div className="col-lg-6 col-lg-offset-3 centered">
                <h3>{project.title}</h3>
                <hr />
                <p>{project.description}</p>
                <h4><a href={project.demoLink}>Demo</a></h4>
              </div>
            </div>
          </div>
          : ''
        }

        <FooterSection />
      </div>
    )
  }

};
