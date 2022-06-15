import React, { FC } from 'react';
import { IAppMenuList } from '../../../const/model';
import MenuItem from './MenuItem';

import './index.scss';

interface IProps {
  list: Array<IAppMenuList>;
}

const Menu:FC<IProps> = ({list}) => {
  const menuItem = list.map(({text, route}, index) => <MenuItem {...{text, route}} key={index} />)

  return (
    <nav className="app-header__menu">
      <ul>
        {menuItem}
      </ul>
    </nav>
  );
}

export default Menu;
