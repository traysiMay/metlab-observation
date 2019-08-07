import React from "react";
import { render } from "react-dom";

import Provider from "./_contexts/DrizzleProvider";

import { App } from "./App";

// setup fake backend
import { configureFakeBackend } from "./_helpers";
configureFakeBackend();

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")
);
