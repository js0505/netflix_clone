import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from '../Routes/HomeScreen'
import TV from '../Routes/TVScreen'
import Detail from '../Routes/DetailScreen'


const ScreenRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/tv' exact component={TV} />
                <Route path='/search' exact component={Home} />
                <Route path='/movie/:id' exact component={Detail} />
                <Route path='/tv/:id' exact component={Detail} />
            </Switch>
        </Router>
    );
};



export default ScreenRouter;