import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line node/no-unpublished-import
import { AppContainer } from "react-hot-loader";

import "./styles.css";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  root
);

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./app", () => {
    const NextApp = require("./app").default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      root
    );
  });
}
