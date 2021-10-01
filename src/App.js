import React, { Fragment } from "react";
import { Switch } from "react-router-dom";
import ArticlePage from "./modules/articles/pages/ArticlePage";
import PublicMainLayout from "./routes/PublicMainLayout";

function App() {
  return (
    <Fragment>
      <Switch>
        <PublicMainLayout exact path="/" component={ArticlePage} />
      </Switch>
    </Fragment>
  );
}

export default App;
