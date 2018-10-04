import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const navbar = () => {
    return (
    <nav className="nav-wrapper amber darken-2">
      <Link to="/" className="brand-logo center">Beer Buddy</Link>
      <SignedInLinks />
      <SignedOutLinks />
    </nav>
    )
    
};

export default navbar;