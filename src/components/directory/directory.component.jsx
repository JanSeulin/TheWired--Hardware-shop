import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import { HOMEPAGE_DATA } from './directory.data';

const Directory = () => {
  return (
    <div className="directory-menu">
      {HOMEPAGE_DATA.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
