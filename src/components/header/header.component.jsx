import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/cpu-logo.svg';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
        <h1 className="logo-text">THE WIRED</h1>
      </Link>

      <div className="menu-options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
