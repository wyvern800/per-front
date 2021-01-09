import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Character from "./pages/Character";
import AboutUS from "./pages/AboutUS";

export default function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/characters" exact component={Character} />
        <Route path="/characters/:slug" component={About} />
        <Route path="/aboutus" exact component={AboutUS} />
    </Switch>
  );
}
