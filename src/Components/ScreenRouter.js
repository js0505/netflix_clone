import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import Detail from '../Routes/DetailScreen';
import Home from '../Routes/HomeScreen'
import TV from '../Routes/TvScreen'


const ScreenRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path={'/'} exact component={Home} />
                <Route path={'/tv'} exact component={TV} />
                <Route path={'/search'} exact component={Home} />
                <Route path={'/movie/:id'} component={Detail} />
                <Route path={'/tv/:id'} component={Detail} />
            </Switch>
        </Router>
    );
};

export default ScreenRouter;