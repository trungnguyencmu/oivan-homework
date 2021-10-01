import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { ReactQueryDevtools } from "react-query-devtools";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./app/services/articles";

import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import WebFont from "webfontloader";

function configFonts() {
  WebFont.load({
    google: {
      families: ["Inter"]
    }
  });
}
configFonts();

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <BrowserRouter>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
