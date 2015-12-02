
import { Component, PropTypes } from 'react';
import moment from 'moment';

export default class BlogSummary extends Component {

  static props = {
    index: PropTypes.number.isRequired,
    blog: PropTypes.object.isRequired,
  }

  getPreviews() {
    return this.props.blog.previews.map((preview, i) => <p key={i}>{preview}</p>);
  }

  render() {
    let iconStyle = {
      width: '50px',
      height: '50px',
      marginRight: '20px',
    };
    return (
      <div id={(this.props.index % 2) ? 'grey': 'white'}>
  	    <div className="container">
    			<div className="row">
    				<div className="col-lg-8 col-lg-offset-2">
    					<p><img src="/img/user.png" style={iconStyle} /><ba>{this.props.blog.author || 'Anonymous'}</ba></p>
    					<p><bd className="blog-creation-time">{moment(this.props.blog.created).format('LL')}</bd></p>
    					<h4>{this.props.blog.title}</h4>
              {this.getPreviews()}
    					<p><a href={`/blog/${this.props.blog._id}`}>Continue Reading&hellip;</a></p>
    				</div>

    			</div>
  	    </div>
    	</div>
    );
  }

}
