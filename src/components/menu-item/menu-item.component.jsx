import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  return (
    <div className="menu-item">
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">EXPLORE &#129146;</span>
      </div>
    </div>
  );
};

export default MenuItem;
