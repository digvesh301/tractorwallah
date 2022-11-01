import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {StateProvider} from './StateProvider';
import reducer, {initialState} from './reducer';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
   
  </BrowserRouter></React.StrictMode>,
  document.getElementById("root")
);
