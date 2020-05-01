import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCwg9pmTfUTOw4QKKgftBvJWuJEXvgSGto",
  authDomain: "psm-64dd2.firebaseapp.com",
  databaseURL: "https://psm-64dd2.firebaseio.com",
  projectId: "psm-64dd2",
  storageBucket: "psm-64dd2.appspot.com",
  messagingSenderId: "819018796713",
  appId: "1:819018796713:web:fbad54baee82fd6bb223b8",
  measurementId: "G-3BP14K6VW8",
};
firebase.initializeApp(config);

ReactDOM.hydrate(
  <HashRouter basename="/">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

const storage = firebase.storage();

export { storage, firebase as default };
