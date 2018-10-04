import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className='right'>
        <li><NavLink to='/'>Find Friends</NavLink></li>
        <li><NavLink to="/signout">Sign Out</NavLink></li>
        <li><NavLink to='/' className= "btn btn-floating black">GH</NavLink></li>

        </ul>
    )
    
};

export default SignedInLinks;