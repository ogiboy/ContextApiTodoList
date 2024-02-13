import React, { useContext } from "react";
import { App } from "./app";
import { createRoot } from "react-dom/client";
import { Provider } from "./todo-context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider>
    <App tab="home" />
  </Provider>
);
