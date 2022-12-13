import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Index } from "./containers/Index";
import { Show } from "./containers/Show";
import { New } from "./containers/New";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/posts/new">
            <New />
          </Route>
          <Route
            exact
            path="/posts/:postId"
            render={({ match }) => <Show match={match} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
