import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { appMenuList } from '../../const/constant';

import Menu from './Menu';
import Button from '../shared/Button';

import logo from '../../assets/images/logo.svg';
import './index.scss';
import { getRequestToken } from '../../redux/actions';

const Header:FC = () => {
  let dispatch = useDispatch();
  const [hasSessionToken, setHasSessionToken] = useState<boolean>(false)

  const handleGetRequest = () => {
    dispatch(getRequestToken())
    setHasSessionToken(true)
  }

  return (
    <header className="app-header">
      <div className="app-header__logo">
          <img src={logo} alt="app movie logo" />
      </div>
      <Button
        onClick={() => handleGetRequest}
      >
        Get Session
      </Button>
       {(hasSessionToken || localStorage.getItem('account_id')) && <Menu list={appMenuList} />}
    </header>
  );
}

export default React.memo(Header);
