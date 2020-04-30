import React from "react";
import { Home, path as HomePath } from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import MyPhotos from "./Screens/MyPhotos/MyPhotos";
import {
  ImageGallery,
  path as ImageGalleryPath,
} from "./Screens/ImageGallery/ImageGallery";
import Account from "./Screens/Account/Account";
import AddPicture from "./Screens/AddPicture/AddPicture";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <Route component={MyPhotos} path="/myPhotos" />
        <Route component={ImageGallery} path={ImageGalleryPath} />
        <Route component={Account} path="/account" />
        <Route component={AddPicture} path="/post" />
        <Route component={Home} path={HomePath} />
      </Switch>
    </div>
  );
}

export default App;
