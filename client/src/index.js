import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import "./index.css";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import App from "./App";
import reducers from "./reducers";
const store = createStore(reducers, compose(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
