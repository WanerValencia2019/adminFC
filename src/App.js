import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';
import './css/styles.css';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

// Import pages
import Home from './pages/Home';
import Users from './pages/Users';
import Roles from './pages/Roles';
import Interests from './pages/Interests';
import Services from './pages/Services';
import StateServices from './pages/StateServices';
import UserServices from './pages/UserServices';
import Matchs from './pages/Matchs';





function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
            <Users />          
        </Route>
        <Route exact path="/users-roles">
            <Roles />
        </Route>
        <Route exact path="/interests">
            <Interests />
        </Route>
         <Route exact path="/services">
            <Services />
        </Route>
        <Route exact path="/services-states">
            <StateServices />
        </Route>
        <Route exact path="/services-users">
            <UserServices />
        </Route>
         <Route exact path="/matchs">
            <Matchs />
        </Route>
      </Switch>
    </>
  );
}

export default App;
