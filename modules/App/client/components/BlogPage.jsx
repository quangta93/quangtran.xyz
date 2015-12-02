
import { Component } from 'react';
import ReactMixin from 'react-mixin';

import NavBar from './NavBar';
import BlogSummary from './BlogSummary';
import FooterSection from './FooterSection';

@ReactMixin.decorate(ReactMeteorData)
export default class BlogPage extends Component {

  getMeteorData() {
    return {
      blogs: [{
        _id: "123",
        created: new Date(),
        author: 'Quang Tran',
        title: 'The Amazing Spiderman',
        previews: ["Spider-Man is a fictional character, a comic book superhero that appears in comic books published by Marvel Comics. Created by writer-editor Stan Lee and writer-artist Steve Ditko, he first appeared in Amazing Fantasy #15 (cover-dated Aug. 1962).", "Lee and Ditko conceived the character as an orphan being raised by his Aunt May and Uncle Ben, and as a teenager, having to deal with the normal struggles of adolescence in addition to those of a costumed crimefighter."],
      }],
    };
  }

  getBlogSummaries() {
    return this.data.blogs.map((blog, i) => blog && <BlogSummary key={i} blog={blog} index={i} />);
  }

  render() {
    return (
      <div>
        <NavBar />

        {this.getBlogSummaries()}

        <FooterSection />
      </div>
    );
  }

};
