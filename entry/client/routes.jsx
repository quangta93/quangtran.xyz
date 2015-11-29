import { Route } from 'react-router';

import appRoutes from 'App/client/routes'

ReactRouterSSR.Run(
  <Route>
    {appRoutes}
  </Route>
);
