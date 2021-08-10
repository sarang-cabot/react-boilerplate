import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostsPage from 'components/posts';
import PrimeNumber from 'components/prime';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <PostsPage />
        </Route>
        <Route path="/prime">
          <PrimeNumber />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
