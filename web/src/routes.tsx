import React from 'react';
//routes
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//components
import Landing from './pages/Landing';
import orphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={orphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
      </Switch>
      
    </BrowserRouter>
  );
}

export default Routes;