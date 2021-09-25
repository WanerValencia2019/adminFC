/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import './css/style.scss';
import './css/styles.css';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

// Import pages
import Home from './pages/Home';

import Users from './pages/Users';
import UserDetail from './pages/UserDetail';

import Roles from './pages/Roles';
import RoleDetail from './pages/RoleDetail';

import Interests from './pages/Interests';
import InterestDetail from './pages/InterestDetail';

import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';

import StateServices from './pages/StateServices';
import StateServiceDetail from './pages/StateServiceDetail';

import UserServices from './pages/UserServices';
import UserServiceDetail from './pages/UserServiceDetail';

import Matchs from './pages/Matchs';
import MatchDetail from './pages/MatchDetail';

import PaymentTypes from './pages/PaymentTypes';
import PaymentTypeDetail from './pages/PaymentTypeDetail';

import Transactions from './pages/Transactions';
import TransactionDetail from './pages/TransactionDetail';

function App() {
    const location = useLocation();

    useEffect(() => {
        document.querySelector('html').style.scrollBehavior = 'auto';
        window.scroll({ top: 0 });
        document.querySelector('html').style.scrollBehavior = '';
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
                <Route path="/users/:id">
                    <UserDetail />
                </Route>
                <Route exact path="/users-roles">
                    <Roles />
                </Route>
                <Route exact path="/users-roles/:id">
                    <RoleDetail />
                </Route>
                <Route exact path="/interests">
                    <Interests />
                </Route>
                <Route exact path="/interests/:id">
                    <InterestDetail />
                </Route>
                <Route exact path="/services">
                    <Services />
                </Route>
                <Route exact path="/services/:id">
                    <ServiceDetail />
                </Route>
                <Route exact path="/services-states">
                    <StateServices />
                </Route>

                <Route exact path="/services-states/:id">
                    <StateServiceDetail />
                </Route>

                <Route exact path="/services-users">
                    <UserServices />
                </Route>
                <Route exact path="/services-users/:id">
                    <UserServiceDetail />
                </Route>
                <Route exact path="/matchs">
                    <Matchs />
                </Route>

                <Route exact path="/matchs/:id">
                    <MatchDetail />
                </Route>

                <Route exact path="/paymentTypes">
                    <PaymentTypes />
                </Route>
                <Route exact path="/paymentTypes/:id">
                    <PaymentTypeDetail />
                </Route>
                <Route exact path="/transactions">
                    <Transactions />
                </Route>
                <Route exact path="/transactions/:id">
                    <TransactionDetail />
                </Route>
            </Switch>
        </>
    );
}

export default App;
