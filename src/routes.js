import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Character from './pages/Character';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/characters" exact component={Character} />
      <Route path="/characters/:id" component={About} />
    </Switch>
  );
}
