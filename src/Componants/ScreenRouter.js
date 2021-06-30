import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Home from '../Routes/Home';
import Tv from '../Routes/Tv';
import Search from '../Routes/Search';
import Header from './Header';


const ScreenRouter = () => {
    return (
        <Router>
            <Header />
            <>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/tv' exact component={Tv} />
                    <Route path='/search' exact component={Search} />
                    <Redirect from={'*'} to={"/"} />
                </Switch>
            </>
        </Router>
    );
};

export default ScreenRouter;