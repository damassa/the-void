import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar               from './components/Navbar';
import Home                 from './components/pages/Home';
import Champions            from './components/pages/Champions';
import Lore                 from './components/pages/Lore';
import Other                from './components/pages/Other';

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact={true} path="/"              component={Home} />
            <Route exact={true} path="/champions"     component={Champions} />
            <Route exact={true} path="/lore"          component={Lore} />
            <Route exact={true} path="/other_regions" component={Other} />
        </Switch>
      </BrowserRouter>
    )
  };
}