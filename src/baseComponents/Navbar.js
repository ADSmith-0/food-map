import React from 'react';
import {Link} from 'react-router-dom';

function navbar() {
    return (
            <nav id="navbar">
                <ul>
                    <li><Link to="/Map" className="link">Map</Link></li>
                    <li><Link to="/Search" className="link">Search</Link></li>
                </ul>
            </nav>
    )
}

export default navbar;
