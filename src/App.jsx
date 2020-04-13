import React from "react";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import Profile from "./Screens/Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={Profile} path="/profile" />
        <Route component={Home} path="/" />
      </Switch>
    </div>
  );
}

export default App;
