import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import PageTitle from '../components/PageTitle';
import Button from '../components/shared/Button';

import { getRequestToken } from '../redux/actions';

const Auth:FC = () => {
  let dispatch = useDispatch();
  return (
    <section className="app-page__wrapper">
      <PageTitle content='Request for session' />
      {/* <Button
        onClick={()=> dispatch(getRequestToken())}
      >
        Get Guest Session
      </Button>
      <button onClick={()=> dispatch(getRequestToken())}>
        test
      </button> */}
    </section>
  );
}

export default Auth;
