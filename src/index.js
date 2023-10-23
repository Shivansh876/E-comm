import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "./index.css";
import rootReducer from "./reducer/rootReducer";
import {Toaster} from "react-hot-toast"
import { BrowserRouter } from "react-router-dom";

// now make store 
const store = configureStore({
  reducer: rootReducer,
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
