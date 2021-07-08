import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import DetailScreen from '../Routes/DetailScreen';
import HomeScreen from '../Routes/HomeScreen';
import TvScreen from '../Routes/TVScreen';


const ScreenRouter = () => {
    return (
        <Router>
            <Header />
            <>
            <Switch>
                <Route path='/' exact component={HomeScreen} />
                <Route path='/tv' exact component={TvScreen} />
                <Route path='/search' exact component={HomeScreen} />
                <Route path='/movie/:id' exact component={DetailScreen} />
                <Route path='/tv/:id' exact component={DetailScreen} />
            </Switch>
            </>
        </Router>
    );
};

export default ScreenRouter;