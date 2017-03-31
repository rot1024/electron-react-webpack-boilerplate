import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import "./style.css";
import App from "./app";

function render(AppComponent) {
  ReactDOM.render(
    <AppContainer>
      <AppComponent />
    </AppContainer>,
    document.getElementById("root")
  );
}

render(App);

if (module.hot) {
  module.hot.accept("./app", () => {
    render(require("./app").default);
  });
}
