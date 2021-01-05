import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Character from "./pages/Character";
import Xota from "./pages/Home/about"

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/characters" exact component={Character} />
        <Route path="/about" exact component={Xota} />
        <Route path="/characters/:slug" component={About} />
    </Switch>
  );
}
