import React from 'react';

import "bootstrap/dist/css/bootstrap.css";

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className='navbar navbar-light justify-content-around' style={{'background-color': '#e3f2fd'}}>
                <NavLink to='/' className='nav-link px-2'>Home</NavLink>
                <NavLink to='/players' className='nav-link px-2'>Players</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;