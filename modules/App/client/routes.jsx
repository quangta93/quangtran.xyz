import { Route, IndexRoute } from 'react-router';

import AppWrapper from './AppWrapper';
import App from './App';

export default (
  <Route path="/" component={AppWrapper}>
    <IndexRoute component={App} />
  </Route>
);
