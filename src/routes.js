import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Character from "./pages/Character";
import AboutUS from "./pages/AboutUS";
import Highscores from './pages/Highscores'

export default function Routes() {
  return (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/characters" exact component={Character} />
        <Route path="/characters/:slug" component={About} />
        <Route path="/highscores" component={Highscores} />
        <Route path="/aboutus" exact component={AboutUS} />
    </Switch>
  );
}
