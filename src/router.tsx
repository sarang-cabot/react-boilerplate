import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostsPage from 'components/posts';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <PostsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
