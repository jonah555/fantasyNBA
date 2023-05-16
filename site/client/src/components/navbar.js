import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className='navbar navbar-light justify-content-around' style={{'background-color': '#e3f2fd'}}>
                <NavLink to='/' className='nav-link px-2'>Home</NavLink>
                <NavLink to='/players' className='nav-link px-2'>Players</NavLink>
                <NavLink to='/teams' className='nav-link px-2'>Teams</NavLink>
                <NavLink to='/games' className='nav-link px-2'>Games</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;