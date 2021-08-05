import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from 'components/login';
import PostsPage from 'components/posts';
import PrimeNumber from 'components/prime';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/posts">
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
