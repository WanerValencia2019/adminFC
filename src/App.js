import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

// Import pages
import Home from './pages/Home';
import Users from './pages/Users';
import Roles from './pages/Roles';

import UserProvider from './context/users/UserProvider';


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
          <UserProvider>
            <Users />
          </UserProvider>
        </Route>
        <Route exact path="/users-roles">
            <Roles />
        </Route>
      </Switch>
    </>
  );
}

export default App;
