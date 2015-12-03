import { Route, IndexRoute } from 'react-router';

import AppWrapper from './AppWrapper';

import IndexPage from './components/IndexPage';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import BlogPost from './components/BlogPost';
import ContactPage from './components/ContactPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={AppWrapper}>
    <IndexRoute component={IndexPage} />
    <Route path="index" component={IndexPage} />
    <Route path="work" component={WorkPage} />
    <Route path="about" component={AboutPage} />
    <Route path="blog" component={BlogPage} />
    <Route path="contact" component={ContactPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
