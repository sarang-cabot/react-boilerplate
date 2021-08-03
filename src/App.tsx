import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginPage } from "pages/login";
import { PostsPage } from "pages/posts";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/posts">
          <PostsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
