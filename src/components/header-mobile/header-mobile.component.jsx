import React from 'react';
import { Link } from 'react-router-dom';

import './header-mobile.styles.scss';

const HeaderMobile = () => {
  return (
    <div className="mobile-nav-bar">
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

export default HeaderMobile;
