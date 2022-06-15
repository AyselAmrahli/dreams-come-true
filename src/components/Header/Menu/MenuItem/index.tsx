import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { IAppMenuList } from '../../../../const/model';

import './index.scss';

const MenuItem:FC<IAppMenuList> = ({text, route}) => {
  return (
    <li className="app-header__menu__item">
      <NavLink to={route}>
        {text}
      </NavLink>
    </li>
  );
}

export default MenuItem;
