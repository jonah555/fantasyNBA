import React from 'react';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className='navbar navbar-light justify-content-around text-light bg-dark'>
                <NavLink to='/' className='nav-link p-2'>Home</NavLink>
                <NavLink to='/players' className='nav-link p-2'>Players</NavLink>
                <NavLink to='/teams' className='nav-link p-2'>Teams</NavLink>
                <NavLink to='/games' className='nav-link p-2'>Games</NavLink>
                <NavLink to='/trade' className='nav-link p-2'>Trade</NavLink>
            </nav>
        </div>
    );
};

export default NavBar;