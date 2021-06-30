import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Movies</Link>
                </li>
                <li>
                    <Link to="/tv">Tv</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;