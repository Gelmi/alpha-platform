import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './screens/login';
import Mentoring from './screens/mentoring';

const Routes = () => (
    <Router>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/mentoring' component={Mentoring} />
        </Switch>
    </Router>
);

export default Routes;