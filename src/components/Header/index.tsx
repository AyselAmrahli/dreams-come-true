import React from 'react';
import { appMenuList } from '../../const/constant';

import Menu from './Menu';

import logo from '../../assets/images/logo.svg';
import './index.scss';

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header__logo">
          <img src={logo} alt="app movie logo" />
      </div>
        <Menu list={appMenuList} />
    </header>
  );
}

export default React.memo(Header);
