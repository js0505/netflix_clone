import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Home from '../Routes/Home';
import Tv from '../Routes/Tv';
import Search from '../Routes/Search';



const ScreenRouter = () => {
    return (
        <Router>
            <>
                <Route path='/' exact component={Home} />
                <Route path='/tv' exact component={Tv} />
                <Route path='/search' exact component={Search} />
                <Redirect from={'*'} to={"/"} />
            </>
        </Router>
    );
};

export default ScreenRouter;